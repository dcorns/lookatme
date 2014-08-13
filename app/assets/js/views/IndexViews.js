/**
 * Created by dcorns on 5/26/14.
 */

var Backbone = require('backbone');
var $ = require('jquery');
var IndexView = require('./IndexView');
Backbone.$ = $;
//Make a selection list for users
module.exports = Backbone.View.extend({
  tagName: 'select',
  className: 'users',
  initialize: function() {
    this.collection.on('add', this.addUser, this);
    this.collection.on('reset', this.addAll, this);
  },
//define function for adding user to list
  addUser: function(user) {
    var indexView = new IndexView({model: user});
    this.$el.append(indexView.el);
  },
//define function for adding all users to list
  addAll: function() {
    this.collection.forEach(this.addUser);
  },
//display the user selection list
  render: function() {
    this.addAll();
  }

});