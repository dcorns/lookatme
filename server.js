var express = require('express');
var app = express();
var handlebars = require('handlebars');
//set up views
app.engine('hbs', handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/assets/templates');

//Handle all errors
function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});


var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});
