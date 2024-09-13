// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom route example
  server.get('/test/apple', (req, res) => {
    const actualPage = '/post';
    const queryParams = { id: req.params.id }; 
    app.json({a:20});
  });

  // Default catch-all handler to allow Next.js to handle all other routes
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });

  
});
