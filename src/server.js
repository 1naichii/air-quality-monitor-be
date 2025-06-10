// file: index.js
const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes');
const { initializeWebSocket } = require('./services/websocketServices');

const app = express();
const PORT = process.env.PORT || 3000;

// Get CORS origins from environment variable, fallback to default
const corsOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'];

// Enable CORS for all routes
app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'X-API-Key']
}));

app.use(express.json());

// Semua route akan memiliki prefix /api
// Contoh: /sensor/mq135 menjadi /api/sensor/mq135
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('IoT Backend API v2 (Structured) is running!');
});

const server = http.createServer(app);

initializeWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});