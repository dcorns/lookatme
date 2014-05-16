var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    author: String,
    topic: String,
    title: String,
    searchTerms: [],
    body: String,
    citations: [],
    bibliography: [],
    body: String

});

module.exports = mongoose.model('blog', BlogSchema);
