/**
 * Created by dcorns on 5/22/14.
 */

var Backbone = require('backbone');
var $ = require('jquery');
var UserView = require('./UserView');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  className: 'notes',

  initialize: function() {
    this.collection.on('add', this.addUser, this);
    this.collection.on('reset', this.addAll, this);
  },

  addUser: function(user) {
    var userView = new UserView({model: user});
    this.$el.append(userView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addUser);
  },

  render: function() {
    this.addAll();
  }

});
