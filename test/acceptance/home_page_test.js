'use strict';

casper.test.begin('home page', 3, function suite(test) {

    casper.start('http://localhost:8080/', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertTitle('OnlineResume | Home', 'title is OnlineResume | Home');
    });

    casper.then(function() {
        test.assertSelectorHasText('h1', 'My Porfollio');
    });

    casper.run(function() {
        test.done();
    });
});
