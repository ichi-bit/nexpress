var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var contentSchema = new Schema ({
  site_id: { type: Number, refs: Site },
  content_id: Number,
  user_id: { type: Number, refs: User},
  title   : String,
  summary  : String,
  image: String,
  publish_date: { type: Date, default: Date.now },
  expire_date: { type: Date, default: null },
  article: [Schema.Types.Mixed]
});

contentSchema.plugin(mongoose.AutoIncrement, { inc_field: 'content_id'});

module.exports = mongoose.model('Content', contentSchema);
