/**
 * Created by dcorns on 5/17/14.
 */
'use strict';
var request = require('supertest');
var chai =  require('chai');
var expect = chai.expect;
var should = chai.should();

<<<<<<< HEAD
//uncomment this to start server before test
=======
//user to start server if not already started
>>>>>>> master
//var app = require('../../server.js').app;

it ('get /api/user should return json data array', function(done){
  request('http://127.0.0.1:8080')
    .get('/api/users')
    .set('Accept', 'application/json')
    .expect('Content Type','/json/')
    .expect(200)
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
