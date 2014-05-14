'use strict';

var User = require('../models/UserData');

exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    User.find({}, function(err, users) {
        if (err) {
            res.writeHead(500);
            res.send({
                'error': err
            });
        } else {
            //change the password to [FILTERED] for each user
            res.send(users);
        }
    });
};
