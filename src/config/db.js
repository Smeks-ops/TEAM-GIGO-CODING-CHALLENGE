const mongoose = require('mongoose');
const appConfig = require('./config');

exports.mongoConnection = () => {
  return mongoose.connect(appConfig.db.connectionURL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
}