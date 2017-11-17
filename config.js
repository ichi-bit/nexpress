// config.js
const config = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'nexpress'
 },
 secret: {
   key:  '#%$SomethingRandomString&%$'
 }
};

module.exports = config;
