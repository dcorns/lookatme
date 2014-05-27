/**
 * Created by dcorns on 5/26/14.
 */

var Backbone = require('backbone');
var $ = require('jquery');
var IndexView = require('./IndexView');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  className: 'users',

  initialize: function() {
    this.collection.on('add', this.addUser, this);
    this.collection.on('reset', this.addAll, this);
  },

  addUser: function(user) {
    var indexView = new IndexView({model: user});
    this.$el.append(indexView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addUser);
  },

  render: function() {
    this.addAll();
  }

});