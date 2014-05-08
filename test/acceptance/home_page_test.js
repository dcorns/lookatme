'use strict';

casper.test.begin('home page', 3, functions suite(test) {

    casper.start('http://localhost:3000/', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertTitle('Hello World Express', 'title is Hello World Express');
    });

    casper.then(function() {
        test.assertSelectorHasText('hi', 'Hello World');
    });

    casper.run(function() {
        test.done();
    });
});
