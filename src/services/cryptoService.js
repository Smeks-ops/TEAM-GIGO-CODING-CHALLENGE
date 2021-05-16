const axios = require('axios');
const url = 'https://api.binance.com/api/v3/ticker/24hr';
const Crypto = require('../models/crypto');

const getAllCrypto = async ()=>{
  const allCrypto = await Crypto.find();
  return {
    length: allCrypto.length,
    data: allCrypto,
  };
}

const storeAllCrypto = async ()=> {

  const response = await axios.get(url);
  const allCryptoData = response.data;
  const selectedData = allCryptoData.slice(0, 10);

  for (const data of selectedData) {
    let crypto = new Crypto();
    crypto.askPrice = data.askPrice;
    crypto.askQty = data.askQty;
    crypto.bidPrice = data.bidPrice;
    crypto.bidQty = data.bidQty;
    crypto.lastPrice = data.lastPrice;
    crypto.lastQty = data.lastQty;
    crypto.symbol = data.symbol;
    crypto.volume = data.volume;
    await crypto.save();
  }
  return;
}

const getAllCryptoBySymbol = async (symbolName)=>{
  const allCryptoBySymbol = await Crypto.find({ symbol: symbolName });
  return {
    length: allCryptoBySymbol.length,
    data: allCryptoBySymbol,
  };
}

module.exports = { getAllCrypto, storeAllCrypto, getAllCryptoBySymbol }