var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var categorySchema = new Schema ({
  site_id: { type: Number, refs: Site },
  category_id: Number
  name   : String,
  title  : String
});

categorySchema.plugin(mongoose.AutoIncrement, { inc_field: 'category_id'});

module.exports = mongoose.model('Category', categorySchema);
