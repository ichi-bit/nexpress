var config = require('./config');
var mongoose = require('mongoose');  // mongoose 利用
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { db: { host, port, name } } = config;

const option = {
  useMongoClient: true,
  poolSize: 10
};
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb:\/\/${host}:${port}/${name}`, option); // 接続
mongoose.AutoIncrement = AutoIncrement;

module.exports = mongoose;
