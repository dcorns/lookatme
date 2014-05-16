//server.js
'use strict';
//Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //for getting data from a post
var User = require('./api/models/user');
var UserRoutes = require('./api/routes/userroutes.js');
var dataBase = require('./api/database');
var handlebars = require('handlebars');
var cons = require('consolidate');
var MongoClient = require('mongodb').MongoClient;//npm install mongodb
var Server = require('mongodb').Server; //npm install mongodb
var BSON = require('mongodb').BSONPure; //npm install mongodb
//var format = require('util').format; //used for mongo db

//Configure mongo connection
var mongoclient = new MongoClient(new Server('localhost', 27017, {native_parser: true}));
//Configure mongo database
var db = mongoclient.db('onlineResumeDev');

app.use(bodyParser());


//Handlebars setup
app.engine('hbs', cons.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/assets/templates');

//set up envs
var port = process.env.PORT || 8080;

//routing
var router = express.Router();

//Do this for every route/request
router.use(function(req, res, next) {
    console.log('There was a server request');
    next(); //go on to specific route
});

//On routes that end in /users
router.route('/users')
//create a user accessed at /api/users
.post(function(req, res) {
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
console.dir(user);
    db.collection('users').insert(user,function(err, inserted) {
        if (err)
            res.send(err);

        res.json({
            message: 'User created!'
        });
    });
})

//get all users accessed at /api/users
.get(function(req, res){dataBase.getAllUsers(req, res);});

//On routes that end in /api/users/:user_id
//Note /:param1/:param2/:param3...(req.params.param1 etc.) and ?getvar1=value&getvar2=value&getvar3=value...(req.query.getvar1 etc.)
router.route('/users/:id')
//Find user by id
.get(function(req, res) {
      //Convert string id to ObjectID
      var query = BSON.ObjectID.createFromHexString(req.params.id);

      db.collection('users').findOne({_id: query}, function(err, doc){
        if (err) res.send(err);
        res.json(doc);
        console.dir(doc); //remove after testing
      });
})

.put(function(req, res) {
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
    });
})

.delete(function(req, res) {
    var id = BSON.ObjectID.createFromHexString(req.params.id);
    db.collection('users').remove({
        _id: id
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User deleted!'
        });

    });
});

app.use('/api', router); //prefix every route with /api
//set up views

// display landing page
app.get('/',UserRoutes.landing);
 /*function(req, res) {
    // render the page
  //Called after connection to mongodb succeeds, it finds the first valid document in the users collection
  db.collection('users').findOne({}, function(err,doc){
    res.render('index', doc); //Any handlebar fields on index matching doc field names loaded here
  });*/
 // res.render('index', {lastName : 'Dale Corns'});
    /*res.render('index', {
        partials: {
            'lastName': 'user',
        },
        subTitle: 'Login',
    });*/
//});

app.listen(port);
console.log('Listening on port ' + port);
//connect to the mongo db and don't run the web server unless the connection to the db is successful
/*mongoclient.open(function (err, mongoclient){
  if(err) throw err;
  app.listen(port);
  console.log('Listening on port' + port);*/

//})
