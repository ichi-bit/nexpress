var mongoose      = require('../db');
var Schema        = mongoose.Schema

var contentTagSchema = new Schema ({
  tag_id      : { type: Number, refs: 'Tag' },
  content_id  : { type: Number, refs: 'Content' }
});

module.exports = mongoose.model('ContenTag', contentTagSchema);
