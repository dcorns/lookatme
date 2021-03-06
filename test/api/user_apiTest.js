/**
 * Created by dcorns on 5/17/14.
 */
//server side user testing
'use strict';
var request = require('supertest');
var chai =  require('chai');
var expect = chai.expect;
var should = chai.should();


//uncomment this to start server before test
//var app = require('../../server.js').app;

it ('get /api/user should return json data array', function(done){
  request('http://127.0.0.1:8080')
    .get('/api/users')
    .set('Accept', 'application/json')
    .end(function (err,res){
      if (err) return done(err);
      expect(err).to.eql(null);
      should.exist('res.body');
      expect(res.body).to.be.an('array');
      should.exist('res.body[0]');
      expect(res.body[0]).to.have.property('lastName');
      done();
    });

  });
