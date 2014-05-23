'use strict';

casper.test.begin('home page', 7, function suite(test) {

    casper.start('http://localhost:8080/', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertTitle('DaleCorns | Home', 'title is OnlineResume | Home');
    });

    casper.then(function() {
        test.assertSelectorHasText('h1', 'My Porfollio');
    });
    //Test for index elements
    casper.then(function() {
        test.assertExists('#btnSkills');
    });

    casper.then(function() {
        test.assertExists('#btnEducation');
    });

    casper.then(function() {
        test.assertExists('#btnEmploymentHistory');
    });

    casper.then(function() {
        test.assertExists('#btnInterests');
    });

    casper.run(function() {
        test.done();
    });
});
