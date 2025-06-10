const express = require('express');
const router = express.Router();
const { getAllSensorData, createSensorData } = require('../controllers/mq135Controller');
const { authenticateApiKey } = require('../middleware/auth');

// Route untuk sensor MQ135
// GET /api/sensor/mq135 - mendapatkan semua data sensor MQ135 (protected dengan API key)
// POST /api/sensor/mq135 - menambah data sensor MQ135 baru (protected dengan API key)
router.get('/mq135', authenticateApiKey, getAllSensorData);
router.post('/mq135', authenticateApiKey, createSensorData);

module.exports = router;