StartTest(function(t) {
    t.diag("Splashscreen Tests");

    // Test that splash image exists
    var image = Ext.ComponentQuery.query('');
    console.log('This is the image:');
    console.log(image);
    // t.is(image, 'splash', "We have a Splashscreen image");


    // Test that splashscreen is set


    t.done();   // Optional, marks the correct exit point from the test
});  