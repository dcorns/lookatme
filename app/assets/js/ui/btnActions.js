/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var $ = require('jquery');

module.exports = $(function(){
  $( ".btn" ).click(function() {
    switch(this.id){
      case 'btnEditMode':
        alert('btnEditMode click');
        break;
      case 'btnViewMode':
        alert('btnViewMode click');
        break;
      default:
        alert('No action defined');
        break;
    }
  });
});