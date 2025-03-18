const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require('./src/router/games')

// Cargar el archivo .env específico del microservicio
dotenv.config()

const PORT = process.env.PORT;  // definimos el puerto del servidor

// levantamos el servidor
const app = express()
app.use(express.json())

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