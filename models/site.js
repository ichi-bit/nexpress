var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var siteSchema = new Schema ({
  site_id: Number,
  name   : String,
  title  : String
});

siteSchema.plugin(mongoose.AutoIncrement, { inc_field: 'site_id' });

module.exports = mongoose.model('Site', siteSchema);
