/**
 * Created by dcorns on 5/15/14.
 */
'use strict'
var MongoClient = require('mongodb').MongoClient;//npm install mongodb
var User = require('./models/user');
var BSON = require('mongodb').BSONPure; //npm install mongodb

var dataBase = (function (){

  return{
    getAllUsers:function(req, res){
      console.log('Running getAllUsers...');
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        db.collection('users').find({}).toArray(function(err, docs){
          if (err) res.send(err);
          res.json(docs);
          console.dir(docs);
          db.close(function(){console.log('getAllUsers end');});
        });
      });
    },
    createUser:function(req, res){
      console.log('Running createUser...');
      var user = new User();
      user.firstName = req.body.firstName;
      user.middleName = req.body.middleName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.mobilePhone = req.body.mobilePhone;
      user.homePhone = req.body.homePhone;
      user.workPhone = req.body.workPhone;
      user.objective = req.body.objective;
      user.userLinks = req.body.userLinks;
      user.skills = req.body.skills;
      user.education = req.body.education;
      user.employmentHistory = req.body.employmentHistory;
      user.interests = req.body.interests;
      user.publications = req.body.publications;
      user.certifications = req.body.certifications;
      user.awards = req.body.awards;
      user.references = req.body.references;
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        db.collection('users').insert(user,function(err, inserted) {
          if (err)
            res.send(err);

          res.json({
            message: 'User created!'
          });
          db.close(function(){console.log('createUser end');});
        });
      });
    },
    getUserById:function(req, res){
      console.log('Running getUserById...');
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        var query = BSON.ObjectID.createFromHexString(req.params.id);
        db.collection('users').findOne({_id: query}, function(err, doc){
          if (err) res.send(err);
          res.json(doc);
          console.dir(doc); //remove after testing
          db.close(function(){console.log('getUserById end');});
        });
      });
    },
    updateUserByID:function(req, res){
      console.log('Running updateUserById...');
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        var id = BSON.ObjectID.createFromHexString(req.params.id);
        var query = {'_id': id};
        db.collection('users').findOne(query, function(err, doc) {
          if (err)
            res.send(err);

          query._id = doc._id;
          //put request objects are found in res.query
          doc.lastName = req.query.lastName;
          db.collection('users').update(query, doc, function(err, updated) {
            if (err)
              res.send(err);
            res.json({
              message: 'User updated!'
            });
          });
          db.close(function(){console.log('updateUserById end');});
        });
      });
    },
    deleteUserById:function(req, res){
      console.log('Running deleteUserById...');
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        var id = BSON.ObjectID.createFromHexString(req.params.id);
        db.collection('users').remove({
          _id: id
        }, function(err, user) {
          if (err)
            res.send(err);
          res.json({
            message: 'User deleted!'
          });
          db.close(function(){console.log('deleteUserById end');});
        });
      });
    }
  };
})();
module.exports = dataBase;