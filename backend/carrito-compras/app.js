require('dotenv').config(); // Importar dotenv al inicio
const express = require('express');
const routerApi = require('./src/router');
const swaggerDocs = require('./swagger');
const cors = require("cors")
const { logErrors, errorHandler, boomErrorHandler} = require('./src/middlewares/error_handler');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes desde tu frontend Next.js
  credentials: true, // Permite el envío de cookies u otras credenciales
}));


const whitelist = ['http://127.0.0.1:5500', process.env.CLIENT_URL];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else{
      callback(new Error('No permitido por CORS'));
    }
  }
}

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

swaggerDocs(app, port);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

