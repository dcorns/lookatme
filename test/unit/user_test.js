/**
 * Created by dcorns on 5/16/14.
 */

'use strict';

var expect = require('chai').expect;
var User = require('../../api/models/user');

describe('User object test',function () {
  var user;

  beforeEach(function(){
    user = new User();
  });

  describe('constructor', function() {

    it('user should be truthy (exists)', function () {
      //Added return to pass jshint
      return expect(user).to.be.ok;
    });
  });

  it('user should have lastName property', function() {
    expect(user).to.have.property('lastName');
  });

  it('user lastName property matches beforeEach', function() {
    expect(user.lastName).to.equal('');
  });

  it('user should have firstName property', function() {
    expect(user).to.have.property('firstName');
  });

  it('user firstName property matches beforeEach', function() {
    expect(user.firstName).to.equal('');
  });

  it('user should have middleName property', function() {
    expect(user).to.have.property('middleName');
  });

  it('user middleName property matches beforeEach', function() {
    expect(user.middleName).to.equal('');
  });

   it('user should have email property', function() {
     expect(user).to.have.property('email');
   });

   it('user email property matches beforeEach', function() {
     expect(user.email).to.equal('');
  });

  it('user should have mobilePhone property', function() {
    expect(user).to.have.property('mobilePhone');
  });

  it('user mobilePhone property matches beforeEach', function() {
    expect(user.mobilePhone).to.equal('');
  });

  it('user should have homePhone property', function() {
    expect(user).to.have.property('homePhone');
  });

  it('user homePhone property matches beforeEach', function() {
    expect(user.homePhone).to.equal('');
  });

  it('user should have workPhone property', function() {
    expect(user).to.have.property('workPhone');
  });

  it('user workPhone property matches beforeEach', function() {
    expect(user.workPhone).to.equal('');
  });

  it('user should have objective property', function() {
    expect(user).to.have.property('objective');
  });

  it('user objective property matches beforeEach', function() {
    expect(user.objective).to.equal('');
  });

  it('user should have links property', function() {
    expect(user).to.have.property('links');
  });

  it('user links property matches beforeEach', function() {
    expect(user.links).to.equal('');
  });

  it('user should have skills property', function() {
    expect(user).to.have.property('skills');
  });

  it('user skills property matches beforeEach', function() {
    expect(user.skills).to.equal('');
  });

  it('user should have education property', function() {
    expect(user).to.have.property('education');
  });

  it('user education property matches beforeEach', function() {
    expect(user.education).to.equal('');
  });

  it('user should have employmentHistory property', function() {
    expect(user).to.have.property('employmentHistory');
  });

  it('user employmentHistory property matches beforeEach', function() {
    expect(user.employmentHistory).to.equal('');
  });

  it('user should have interests property', function() {
    expect(user).to.have.property('interests');
  });

  it('user interests property matches beforeEach', function() {
    expect(user.interests).to.equal('');
  });

  it('user should have publications property', function() {
    expect(user).to.have.property('publications');
  });

  it('user publications property matches beforeEach', function() {
    expect(user.publications).to.equal('');
  });

  it('user should have certifications property', function() {
    expect(user).to.have.property('certifications');
  });

  it('user certifications property matches beforeEach', function() {
    expect(user.certifications).to.equal('');
  });

  it('user should have awards property', function() {
    expect(user).to.have.property('awards');
  });

  it('user awards property matches beforeEach', function() {
    expect(user.awards).to.equal('');
  });

  it('user should have references property', function() {
    expect(user).to.have.property('references');
  });

  it('user references property matches beforeEach', function() {
    expect(user.references).to.equal('');
  });

});





