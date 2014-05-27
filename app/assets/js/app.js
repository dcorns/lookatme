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
var userCollection = new Users();

$(function(){
  var userCollectionView = new IndexViews({collection: userCollection});
  userCollection.fetch({
    success: function() {
      $('.userList').html(userCollectionView.$el);
    }
  });
});

$(function(){
  $('.E').hide();
});

