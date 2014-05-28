/**
 * Created by dcorns on 5/26/14.
 */

'use strict';

var $ = require('jquery');

module.exports = function() {
    return $(".editContent").append("<form class='E' id='Personal'><label class='E' for='firstName'>First Name</label><input class='E' id='firstName'><label class='E' for='lastName'>Last Name</label><input class='E' id='lastName'><label class='E' for='email'>Email</label><input class='E' id='email'></form>");
};