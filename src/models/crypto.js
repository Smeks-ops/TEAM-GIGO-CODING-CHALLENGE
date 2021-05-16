const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  askPrice: {
    type: String,
  },
  askQty: {
    type: String,
  },
  bidPrice: {
    type: String,
  },
  bidQty: {
    type: String,
  },
  lastPrice: {
    type: String,
  },
  lastQty: {
    type: String,
  },
  symbol: {
    type: String,
  },
  volume: {
    type: String,
  },

}, {
  timestamps: true,
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;