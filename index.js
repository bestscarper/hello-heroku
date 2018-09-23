const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello, universe\n');
});

server.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server running on port ${port}/`);
});
