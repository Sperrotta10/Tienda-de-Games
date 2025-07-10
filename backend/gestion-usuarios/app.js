import express from 'express';
import cors from 'cors';
import { UsersRouter } from './src/users/users.router.js';
import { AuthRouter } from './src/auth/auth.router.js';
import { PORT } from './src/config.js';
import initializeDatabase from './src/database.js';

const app = express();

// Inicializar la base de datos
initializeDatabase();

// Middlewares
app.use(express.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes desde tu frontend Next.js
  credentials: true, // Permite el envío de cookies u otras credenciales
}));

// Rutas
app.get('/', async (req, res) => {
  console.log('Request received');
  res.send('Response from the server');
});

app.use('/users', UsersRouter());
app.use('/auth', AuthRouter());

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
