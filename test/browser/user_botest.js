/**
 * Created by dcorns on 5/17/14.
 */

'use strict';
var chai = require(chai);
var expect = chai.expect;
var User = require('../../api/models/user');

describe('User object tests', function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  describe('constructor', function() {

    it('user should be truthy (exists)', function() {
      expect(user).to.be.ok();
    });

    it('user should have lastName property', function() {
      expect(user).to.have.property('lastName');
    });

    it('user lastName property matches beforeEach', function() {
      expect(user.lastName).to.equal('');
    });

  });
});
