var mongoose      = require('../db');
var Schema        = mongoose.Schema

var contentCategorySchema = new Schema ({
  category_id  : { type: Number, refs: 'Category' },
  content_id   : { type: Number, refs: 'Content' }
});

module.exports = mongoose.model('ContentCategory', contentCategorySchema);
