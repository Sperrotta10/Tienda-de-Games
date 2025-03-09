const express = require('express');
//const FrutasService = require('./../services/frutas_service');
//const validatorHandler = require('./../middlewares/validator_handler');
//const { createFrutaSchema, updateFrutaSchema, getFrutaSchema } = require('./../schemas/frutas_schema');

//const service = new FrutasService();

const router = express.Router();


router.get('/', (req, res) => {
  res.send('hola mundo');
});

module.exports = router;
