-- Reorder columns: id, air_quality_raw, reading_time, aqi
ALTER TABLE sensor_data MODIFY COLUMN aqi INT NOT NULL AFTER reading_time;