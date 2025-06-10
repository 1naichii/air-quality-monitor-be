const prisma = require('../lib/prisma');

async function getAllSensorData(req, res) {
  try {
    const allData = await prisma.sensor_data.findMany({ 
      orderBy: { reading_time: 'desc' } // Order by newest first
    });
    
    res.status(200).json(allData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createSensorData(req, res) {
  const { air_quality_raw, aqi } = req.body;
  
  // Validasi: air_quality_raw wajib ada
  if (air_quality_raw === undefined || typeof air_quality_raw !== 'number') {
    return res.status(400).json({ error: 'Invalid data. `air_quality_raw` must be a number.' });
  }
  
  // Validasi: AQI wajib ada
  if (aqi === undefined || typeof aqi !== 'number') {
    return res.status(400).json({ error: 'Invalid data. `aqi` must be a number.' });
  }
  
  // Validasi: air_quality_raw harus positif
  if (air_quality_raw < 0) {
    return res.status(400).json({ error: 'Invalid air_quality_raw value. Must be >= 0.' });
  }
  
  // Validasi: AQI harus dalam range 0-500
  if (aqi < 0 || aqi > 500) {
    return res.status(400).json({ error: 'Invalid AQI value. Must be between 0-500.' });
  }
    try {
    const newData = await prisma.sensor_data.create({ 
      data: { 
        air_quality_raw,
        aqi
      } 
    });
    
    console.log('Data saved:', newData);
    res.status(201).json(newData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getLatestSensorData(req, res) {
  const { since } = req.query;
  
  try {
    let whereClause = {};
    
    // Jika ada parameter 'since', ambil data yang lebih baru dari timestamp tersebut
    if (since) {
      whereClause.reading_time = {
        gt: new Date(since)
      };
    }
    
    const latestData = await prisma.sensor_data.findMany({
      where: whereClause,
      orderBy: { reading_time: 'desc' },
      take: since ? undefined : 1 // Jika tidak ada 'since', ambil hanya 1 data terbaru
    });
    
    res.status(200).json(latestData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getAllSensorData, getLatestSensorData, createSensorData };