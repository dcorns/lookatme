/**
 * Created by dcorns on 5/21/14.
 */


var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
'use strict';
module.exports = Backbone.Model.extend({
    defaults: {lastName: "",
      middleName: "",
      firstName: "",
      email: "",
      mobilePhone: "",
      homePhone: "",
      workPhone: "",
      objective: "",
      links: "",
      skills: "",
      education: "",
      employmentHistory: "",
      interests: "",
      publications: "",
      certifications: "",
      awards: "",
      references: ""
    }
  });
