var mongoose      = require('../db');
var Schema        = mongoose.Schema

var userSiteSchema = new Schema ({
  user_id   : { type: Number, refs: 'User' },
  site_id   : { type: Number, refs: 'Site' },
  role      : String
});

module.exports = mongoose.model('UserSite', userSiteSchema);
