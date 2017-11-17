var mongoose      = require('../db');
var Schema        = mongoose.Schema;

var userSchema = new Schema ({
  user_id   : Number,
  login     : String,
  password  : String
});

userSchema.plugin(mongoose.AutoIncrement, { inc_field: 'user_id'});
userSchema.plugin(require('mongoose-bcrypt'),{ fields: ['password'] });

module.exports = mongoose.model('User', userSchema);
