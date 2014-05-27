/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var $ = require('jquery');
var epv = require('../views/editPersonalView');

module.exports = $(function(){
  $( ".btn" ).click(function() {
    switch(this.id){
      case 'btnEditMode':
        alert('btnEditMode click');
        $(".E").show();
        $(".V").hide();
        epv();

        break;
      case 'btnViewMode':
        alert('btnViewMode click');
        $(".E").hide();
        $(".V").show();
        $(".editContent").empty();
        break;
      case 'btnSaveChanges':
        alert('btnViewMode click');
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