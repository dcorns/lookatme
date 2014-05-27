/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'user',

  initialize: function() {
    this.render();
  },

  render: function() {
    var userAttributes = this.model.toJSON();
    var template = require('../../templates/indextmp.hbs');
    this.$el.html(template(userAttributes));
    return this;
  }
});