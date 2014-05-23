/**
 * Created by dcorns on 5/23/14.
 */

'use strict';

var $ = require('jquery');

module.exports = (function (){
  $( ".btn" ).click(function() {
    alert( this.id );
  });
});