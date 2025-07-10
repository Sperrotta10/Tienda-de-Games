import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } from './config.js';
import fs from 'fs';

let connection;

export default async function initializeDatabase() {
  const con = await createConnection();
  if (!con) {
    console.error('No se pudo establecer la conexión a la base de datos.');
    return;
  }
  try {
    await con.connect();
    console.log('Conectado exitosamente a la base de datos.');
    const sql = fs.readFileSync('./src/tables.sql', 'utf8');
    await con.query(sql);
    console.log('Tablas creadas correctamente.');
  } catch (err) {
    console.error('Error al conectar o crear tablas: ', err);
  }
}

async function createConnection() {
  let retries = 5;
  while (retries) {
      try {
          connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            port: DB_PORT,
            multipleStatements: true
          });
          console.log('Conectado a la base de datos.');
          return connection;
      } catch (error) {
          console.error('Error al conectar a la base de datos:', error);
          retries--;
          console.log(`Reintentando en 5 segundos... (intentos restantes: ${retries})`);
          await new Promise(resolve => setTimeout(resolve, 3000));
      }
  }
  console.error('No se pudo establecer la conexión a la base de datos después de varios intentos.');
  process.exit(1); // Sale de la aplicación si no se puede conectar.
}

export function getConnection() {
  if (!connection) {
      console.error("La conexión no ha sido inicializada.");
  }
  return connection;
}