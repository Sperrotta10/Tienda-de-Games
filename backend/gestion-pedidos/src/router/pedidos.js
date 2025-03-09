const express = require('express')
const {create_pedido, obtener_pedido, obtener_pedidoID, obtener_pedidoUserID} = require('../controller/pedidos')

const rutas = () => {

    // creamos el enrutador
    const routes = express.Router();

    // ruta para crear el pedido
    routes.post('/create-pedido', create_pedido)

    // ruta para obtener los pedidos
    routes.get('/get-pedido', obtener_pedido)

    // ruta para obtener pedido por id
    routes.get('/get-pedidoId/:id_pedido', obtener_pedidoID)

    // ruta para obtener pedido por userId
    routes.get('/get-pedidoUserId/:id_user', obtener_pedidoUserID)

    return routes;
}

module.exports = rutas;