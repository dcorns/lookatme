var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    lastName: String,
    middleName: String,
    firstName: String,
    email: String,
    mobilePhone: String,
    homePhone: String,
    workPhone: String,
    objective: String,
    links: [],
    skills: [],
    education: [],
    employmentHistory[],
    interests: [],
    publications[],
    certifications[],
    awards[],
    references[]

});

module.exports = mongoose.model('user', UserSchema);
