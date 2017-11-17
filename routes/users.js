var express = require('express');
var router = express.Router();
var Site = require('../models/site');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var site = new Site();
  site.name = 'hoge';
  site.title = 'moge';
  site.save();

  var user = new User();
  user.name = '山田太郎';
  user.login = 'ichi-bit';
  user.password = 'PassPassPass';
  user.save();

  res.send('respond with a resource');

});

router.get('/check', function(req, res, next) {
  User.findOne({login: 'ichi-bit'}).then((user)=>{
    console.log(user);
    user.verifyPassword('PassPassPass').then(function(value){
      console.log('Encrypted password is ' + value);
    });
    res.send('checked');
  });
});

module.exports = router;
