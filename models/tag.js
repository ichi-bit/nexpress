var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var tagSchema = new Schema ({
    site_id : { type: Number, refs: Site },
    tag_id  : Number,
    name    : String
});

tagSchema.plugin(mongoose.AutoIncrement, { inc_field: 'tag_id'});

module.exports = mongoose.model('Tag', tagSchema);
