const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require('./src/router/games')
const cors = require("cors")

// Cargar el archivo .env específico del microservicio
dotenv.config()

const PORT = process.env.PORT;  // definimos el puerto del servidor

// levantamos el servidor
const app = express()
app.use(express.json())

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes desde tu frontend Next.js
  credentials: true, // Permite el envío de cookies u otras credenciales
}));

//routes
app.use('/', routes())

// conexion a base de datos y servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Servicio de catalogo de juegos Conectado a mongodb");
    app.listen(PORT, () => {
      console.log(`Servidor esta corriendo en el puerto http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("🚫 Error al conectarse a la base de datos -> Servicio de catalogo", err);
  });