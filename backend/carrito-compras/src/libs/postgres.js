const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'jesus',
    password: 'root',
    database: 'carro_compras'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
