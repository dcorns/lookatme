//server.js--server side entry code
'use strict';
//Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //for getting data from a post
var cons = require('consolidate');
//Import routing code*************************************
//Routes without data
var UserRoutes = require('./api/routes/userroutes.js');
//Data routes
var dataBase = require('./api/database');


app.use(bodyParser());

//Handlebars setup
app.engine('hbs', cons.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/assets/templates');

//Static page and client side code location settings
app.use(express.static(__dirname + '/build'));

//set environment variables
var port = process.env.PORT || 8080;

//Pre routing
var router = express.Router();

//Do this for every route/request
router.use(function(req, res, next) {
    console.log('There was a server request');
    next(); //go on to specific route
});


//Restful Routes*******************************************
//On routes that end in /users
router.route('/users')
//create a user accessed at /api/users
.post(function(req, res){dataBase.createUser(req, res);})

//get all users accessed at /api/users
.get(function(req, res){
    //res.set('Status','200');
   // res.set('Content Type', '/json/');
    dataBase.getAllUsers(req, res);
  });

//On routes that end in /api/users/:user_id
//Note /:param1/:param2/:param3...(req.params.param1 etc.) and ?getvar1=value&getvar2=value&getvar3=value...(req.query.getvar1 etc.)
router.route('/users/:id')
//Find user by _id
.get(function(req,res){dataBase.getUserById(req,res);})
//Update user by _id
.put(function(req, res){dataBase.updateUserByID(req,res);})
//Delete user by _id
.delete(function(req, res){dataBase.deleteUserById(req,res);});


//Start up Code***********************************************************************
app.use('/api', router); //prefix every route with /api


// display landing page
app.get('/',UserRoutes.landing);

app.listen(port);
console.log('Listening on port ' + port);