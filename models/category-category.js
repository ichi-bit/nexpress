var mongoose      = require('../db');
var Schema        = mongoose.Schema

var categoryCategorySchema = new Schema ({
  parent_category_id   : { type: Number, refs: 'Category' },
  category_id   : { type: Number, refs: 'Category' }
});

module.exports = mongoose.model('CategoryCategory', categoryCategorySchema);
