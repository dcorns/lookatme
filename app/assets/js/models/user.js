var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    lastName: String,
    firstName: String,
    email: String
});

module.exports = mongoose.model('user', UserSchema);
