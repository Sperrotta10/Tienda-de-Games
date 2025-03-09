const express = require('express');
const rutas = require('./src/router/pedidos')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// cargar el archivo .env
dotenv.config();

// levantamos el servidor
const app = express();

app.use(express.json());

// routes del microservicio
app.use('api/gestion-pedidos', rutas);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Servicio de catalogo de juegos Conectado a mongodb");
        app.listen(process.env.PORT, () => {
            console.log(`Servidor esta corriendo en el puerto http://localhost:${PORT}`)
        });
    })
    .catch((err) => {
        console.error("🚫 Error al conectarse a la base de datos -> Servicio de gestion pedidos", err)
    });