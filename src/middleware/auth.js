function authenticateApiKey(req, res, next) {
  const apiKey = req.header('X-API-Key');
  const serverApiKey = process.env.API_KEY;

  if (!apiKey) return res.status(401).json({ error: 'Unauthorized: API Key is missing.' });
  if (apiKey !== serverApiKey) return res.status(403).json({ error: 'Forbidden: Invalid API Key.' });

  next();
}
module.exports = { authenticateApiKey };