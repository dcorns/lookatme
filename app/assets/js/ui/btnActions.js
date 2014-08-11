/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var $ = require('jquery');
var ePV = require('../views/editPersonalView');

module.exports = $(function(){
  $( ".btn" ).click(function() {
    switch(this.id){
      case 'btnEditMode':
        alert('btnEditMode click');
        $(".E").show();
        $(".V").hide();
        ePV();
        //$(".editContent").append("<form class='E' id='Personal'><label class='E' for='firstName'>First Name</label><input class='E' id='firstName'><label class='E' for='lastName'>Last Name</label><input class='E' id='lastName'><label class='E' for='email'>Email</label><input class='E' id='email'></form>");

        break;
      case 'btnViewMode':
        alert('btnViewMode click');
        $(".E").hide();
        $(".V").show();
        $(".editContent").empty();
        break;
      case 'btnSaveChanges':
        alert('btnSaveChanges click');
        $(".E").hide();
        $(".V").show();
        $(".editContent").empty();

        break;
      default:
        alert('No action defined');
        break;
    }
  });
});