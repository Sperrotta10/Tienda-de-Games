const express = require('express');

const carritoCompras = require('./carrito-compras_router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/carrito-compras', carritoCompras);
}

module.exports = routerApi;
