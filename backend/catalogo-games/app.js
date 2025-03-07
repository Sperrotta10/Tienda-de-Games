const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config()

const PORT = process.env.PORT;  // definimos el puerto del servidor

// levantamos el servidor
const app = express()
app.use(express.json())

//routes
app.use('/api/catalogo-games')

// conexion a base de datos y servidor
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log("✅ Servicio de catalogo de juegos Conectado a mongodb")
        app.listen(PORT, () => {
            console,log(`Servidor esta corriendo en el puesto ${PORT}`)
        })
    }).catch((err) => {
        console.error("🚫 Error al conectarse a la base de datos -> Servicio de catalogo", err)
    })