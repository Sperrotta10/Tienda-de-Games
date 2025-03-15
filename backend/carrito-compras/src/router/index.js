const express = require('express');

const carritoCompras = require('./carrito-compras_router');

function routerApi(app) {
  const router = express.Router();
  app.use('/', router);
  router.use('/', carritoCompras);
}


module.exports = routerApi;

