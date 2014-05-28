/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName:'option',
  className:'btn',
  initialize: function() {
    this.render();
  },

  render: function(tempin) {
    var userAttributes = this.model.toJSON();
    var template = tempin || require('../../templates/indextmp.hbs');
    $(this.$el).attr('value',userAttributes._id).html(template(userAttributes));
    return this;
  }


});