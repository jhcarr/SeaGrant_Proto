var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Awesome Test Suite',

    preload     : [
        'siesta/resources/css/siesta-all.css',
        // 'esources/yourproject-css-all.css',

        '../touch/sencha-touch-all-debug.js',
        '../touch/sencha-touch-all.js'
    ]
});

Harness.start(
    '010_sanity.t.js'
    // '020_basic.t.js'
);