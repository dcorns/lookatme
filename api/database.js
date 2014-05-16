/**
 * Created by dcorns on 5/15/14.
 */
'use strict'
var MongoClient = require('mongodb').MongoClient;//npm install mongodb
//var Server = require('mongodb').Server; //npm install mongodb
var BSON = require('mongodb').BSONPure; //npm install mongodb
//var assert = require('assert');
var dataBase = (function (){

  //Configure mongo connection
//  var mongoclient = new MongoClient(new Server('localhost', 27017, {native_parser: true}));
//Configure mongo database
 // var db = mongoclient.db('onlineResumeDev');

  return{
    getAllUsers:function(req, res){
      console.log('Running all users...');
      MongoClient.connect('mongodb://localhost:27017/onlineResumeDev', function(err,db){
        if(err) throw err;
        db.collection('users').find({}).toArray(function(err, docs){
          if (err) res.send(err);
          res.json(docs);
          console.dir(docs);
          db.close(function(){console.log('allUsers end');});
        });
      });
    },
    close: function(){
      console.log('Closing connection to Database...')
      return db.close();
    }
  };
})();
module.exports = dataBase;