require('dotenv').config(); // Importar dotenv al inicio
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const swaggerDocs = require('./swagger');

const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error_handler');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
app.use(cors(options));

app.get('/carrito-compras', (req, res) => {
  res.send('HOLA MUNDOOOO, primer server en express')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

swaggerDocs(app, port);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

