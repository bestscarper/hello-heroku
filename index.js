const http = require('http');
const { Client } = require('pg');

const port = process.env.PORT || 5000;
const { DATABASE_URL } = process.env;

const server = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  client.connect()
    .then(() => client.query('SELECT * from hellotable'))
    .then((result) => {
      res.end(`${result.rows[0].name}\n`);
      client.end();
    })
    .catch(() => {
      res.end('ERROR');
      client.end();
    });
});

server.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server running on port ${port}/`);
});
