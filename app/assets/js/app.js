/**
 * Created by dcorns on 5/19/14.
 */
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var User = require('../js/models/usermdl');
var Users = require('../js/models/usermdls');
var IndexViews = require('../js/views/IndexViews');
require('../js/ui/btnActions');


$(function(){
  var userCollection = new Users();
  var userCollectionView = new IndexViews({collection: userCollection});
  userCollection.fetch({
    success: function() {
      $('.mainContent').html(userCollectionView.$el);
    }
  });
});

$(function(){
  $('.E').hide();
});

