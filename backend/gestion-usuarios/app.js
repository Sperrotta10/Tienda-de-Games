import express from 'express';
import { UsersRouter } from './src/users/users.router.js';
import { PORT } from './src/config.js';
import initializeDatabase from './src/database.js';

const app = express();

initializeDatabase();

// Middlewares
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  console.log('Request received');
  res.send('Response from the server');
});

app.use('/users', UsersRouter());

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});