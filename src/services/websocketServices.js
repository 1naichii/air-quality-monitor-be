const { WebSocketServer } = require('ws');

let wss;
const clients = new Set();

function initializeWebSocket(server) {
  wss = new WebSocketServer({ server });
  wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket');
    clients.add(ws);
    ws.on('close', () => {
      console.log('Client disconnected');
      clients.delete(ws);
    });
    ws.on('error', (error) => console.error('WebSocket error:', error));
  });
  console.log('WebSocket service initialized.');
}

function broadcast(data) {
  const jsonData = JSON.stringify(data);
  for (const client of clients) {
    if (client.readyState === client.OPEN) {
      client.send(jsonData);
    }
  }
}

module.exports = { initializeWebSocket, broadcast };