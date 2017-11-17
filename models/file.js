var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var fileSchema = new Schema ({
  site_id: { type: Number, refs: Site },
  file_id: Number,
  user_id: { type: Number, refs: User},
  path   : String
});

fileSchema.plugin(mongoose.AutoIncrement, { inc_field: 'file_id' });

module.exports = mongoose.model('file', fileSchema);
