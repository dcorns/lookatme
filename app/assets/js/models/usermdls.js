/**
 * Created by dcorns on 5/22/14.
 */

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var User = require('../models/user');

module.exports = Backbone.Collection.extend({
  model: User,
  url: '/api/users'
});
