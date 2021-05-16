const express = require('express');
const appConfig = require('./config/config');
const { mongoConnection } = require('./config/db');
const cryptoController = require('./controllers/cryptoController');
const { storeAllCrypto } = require('./services/cryptoService');

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

const app = express();
app.use(cors);


// ROUTES
// Cryto endpoint
app.use('/crypto', cryptoController);

// Default landing endpoint
app.use('/', (req, res, next) => res.status(200).json({ message: 'Welcome to GIGO BINANCE.' }));

// connection to DB and running server
(async () => {
  try {
    await mongoConnection();
    app.listen(appConfig.port, () => {
      console.log(`server is on port ${appConfig.port}`);
      setInterval(storeAllCrypto, 30000)
    })
  } catch (error) {
    console.log('Mongo connection error', error)
  }
})()