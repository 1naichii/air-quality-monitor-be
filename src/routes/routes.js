const express = require('express');
const router = express.Router();

// Import semua route modules
const sensorRoutes = require('./mq135Routes');

// Mount sensor routes dengan prefix /sensor
router.use('/sensor', sensorRoutes);

module.exports = router;