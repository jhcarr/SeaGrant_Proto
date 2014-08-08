var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Awesome Test Suite',

    preload     : [
        '../touch/resources/css/sencha-touch.css',
        // '../resources/yourproject-css-all.css',

        '../touch/sencha-touch-all-debug.js'
        // '../app/view/Home.js'
    ]
});

Harness.start(
    '010_sanity.t.js',
    // 'home_test.t.js',
    // 'simple.t.js',
    // 'sane.t.js',
    'HelloWorld.t.js'
);