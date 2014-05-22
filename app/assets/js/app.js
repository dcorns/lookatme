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
  var UserView = require('../js/views/UserView');
//Models and Views

  var user = new User();
  user.set('lastName', 'Lagumina');
  user.set('firstName', 'Lisa');
  user.set('email', 'lmlagumina@gmail.com');
//console.log($("<div class='user'>{{email}}</div>").appendTo($("body")));
  $("<div class='user'>Hello {{email}}</div>").appendTo($("body"));

  $(function () {
    // Now instantiate our view and render!
    var userView = new UserView({
      model: user
    });
    userView.render();
  });


