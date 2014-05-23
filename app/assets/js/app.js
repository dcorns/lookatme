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
  var UserView = require('../js/views/UserView');
  var UserViews = require('../js/views/UserViews');
  require('../js/ui/btnActions');

  /*var user = new User();
  user.set('lastName', 'Lagumina');
  user.set('firstName', 'Lisa');
  user.set('email', 'lmlagumina@gmail.com');*/

/*$(function(){
  var collection = new Users();
  collection.fetch({},{
    success: function() {
      console.dir(this);
    }
  });
});*/

$(function(){
  var userCollection = new Users();
  var userCollectionView = new UserViews({collection: userCollection});
  userCollection.fetch({
    success: function() {
      $('.mainContent').html(userCollectionView.$el);
    }
  });
});

/*
$(function(){
  $( ".btn" ).click(function() {
    alert( this.id );
  });
});*/
