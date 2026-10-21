const http = require('node:http');
http
  .createServer((req, res) => {
    if (req.url === '/') return res.writeHead(200, { 'content-type': 'text/html' }).end('<h1>home</h1>');
    res.writeHead(404).end('not found');
  })
  .listen(Number(process.env.PORT) || 3000, '0.0.0.0');
