/**
 * Created by dcorns on 5/19/14. Client entry point
 */
'use strict';

//Import Backbone dependencies
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

//Import Backbone models and views
var User = require('../js/models/usermdl');
var Users = require('../js/models/usermdls');
var IndexViews = require('../js/views/IndexViews');
var UserView = require('../js/views/UserView');

//Import ui control modules
require('../js/ui/btnActions');

//Load and display the first window using the first user in the collection, and containing a drop down list of other users
$(function(){
  var userCollection = new Users();
  var userCollectionView = new IndexViews({collection: userCollection});
  userCollection.fetch({
    success: function() {
      $('.userList').html(userCollectionView.$el);
      var user = userCollection.at(0);
      var userView = new UserView({model: user});
      $('.title').html(userView.$el);
    }
  });
});

$(function(){
  $('.E').hide();
});

