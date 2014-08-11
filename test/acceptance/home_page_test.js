'use strict';
//Index.html test
casper.test.begin('home page', 13, function suite(test) {

    casper.start('http://localhost:8080/', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertTitle('DaleCorns | Home', 'title is OnlineResume | Home');
    });

    casper.then(function() {
        test.assertSelectorHasText('h1', 'Online Portfolios');
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

  casper.then(function() {
    test.assertExists('#btnAwards');
  });

  casper.then(function() {
    test.assertExists('#btnPublications');
  });

  casper.then(function() {
    test.assertExists('#btnReferences');
  });

  casper.then(function() {
    test.assertExists('#btnEditMode');
  });

  casper.then(function() {
    test.assertExists('#btnViewMode');
  });

  casper.then(function() {
    test.assertExists('#btnSaveChanges');
  });

    casper.run(function() {
        test.done();
    });
});
