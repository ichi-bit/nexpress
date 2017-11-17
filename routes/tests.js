var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test', { title: 'TestPage' });
});
router.get('/model', function(req, res, next) {

    var User = require('../models/user');
    User.create({
        name: 'testName',
        login: 'testLogin',
        password: 'testPassword'
    }).then( user => {
        var Site = require('../models/site');
        Site.create({
            name: 'testSiteName',
            title: 'testSiteTitle'
        }).then( site => {
            var UserSite = require('../models/user-site');
            UserSite.create({
                user_id: user.user_id,
                site_id: site.site_id,
                role: '管理者'
            }).then( usersite => {
                User.find().exec().then( users => {
                    res.render('test_model',{ title: 'users', data : users });
                });
            });
        });
    });

});

module.exports = router;
