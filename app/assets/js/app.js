/**
 * Created by dcorns on 5/19/14.
 */
'use strict';

// browserify load libraries

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  Backbone.$ = $;
  var User = require('../js/models/usermdl');
  var Users = require('../js/models/usermdls');
  var UserView = require('../js/views/UserView');
//Models and Views

  var user = new User();
  user.set('lastName', 'Lagumina');
  user.set('firstName', 'Lisa');
  user.set('email', 'lmlagumina@gmail.com');

$(function(){
  var collection = new Users();
  collection.fetch({},{
    success: function() {
      console.dir(this);
    }
  });
});

