/**
 * Created by dcorns on 5/17/14.
 */
//blog model test
'use strict';

var expect = require('chai').expect;
var Blog = require('../../api/models/blog');

describe('Blog object test',function () {
  var blog;

  beforeEach(function(){
    blog = new Blog();
  });

  describe('constructor', function() {

    it('blog should be truthy (exists)', function () {
      //added return to pass jshint
      return expect(blog).to.be.ok;
    });
  });

  it('blog should have date property', function() {
    expect(blog).to.have.property('date');
  });

  it('blog date property matches beforeEach', function() {
    expect(blog.date).to.equal('');
  });

  it('blog should have author property', function() {
    expect(blog).to.have.property('author');
  });

  it('blog author property matches beforeEach', function() {
    expect(blog.author).to.equal('');
  });

  it('blog should have topic property', function() {
    expect(blog).to.have.property('topic');
  });

  it('blog topic property matches beforeEach', function() {
    expect(blog.topic).to.equal('');
  });

  it('blog should have title property', function() {
    expect(blog).to.have.property('title');
  });

  it('blog title property matches beforeEach', function() {
    expect(blog.title).to.equal('');
  });

  it('blog should have tags property', function() {
    expect(blog).to.have.property('tags');
  });

  it('blog tags property matches beforeEach', function() {
    expect(blog.tags).to.equal('');
  });

  it('blog should have article property', function() {
    expect(blog).to.have.property('article');
  });

  it('blog article property matches beforeEach', function() {
    expect(blog.article).to.equal('');
  });

  it('blog should have citations property', function() {
    expect(blog).to.have.property('citations');
  });

  it('blog citations property matches beforeEach', function() {
    expect(blog.citations).to.equal('');
  });

  it('blog should have bibliography property', function() {
    expect(blog).to.have.property('bibliography');
  });

  it('blog bibliography property matches beforeEach', function() {
    expect(blog.bibliography).to.equal('');
  });

  it('blog should have comments property', function() {
    expect(blog).to.have.property('comments');
  });

  it('blog comments property matches beforeEach', function() {
    expect(blog.comments).to.equal('');
  });

});