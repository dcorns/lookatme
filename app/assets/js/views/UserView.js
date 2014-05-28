'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    tagName: 'div',
    className: 'title',

    initialize: function() {
        this.render();
    },

    render: function() {
        var userAttributes = this.model.toJSON();
        var template = require('../../templates/usertmp.hbs');
        this.$el.html(template(userAttributes));
        return this;
    }
});
