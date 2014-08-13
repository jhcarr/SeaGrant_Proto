var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Awesome Test Suite',

    preload     : [
        '../touch/resources/css/sencha-touch.css',
        '../resources/css/app.css',

        
        '../touch/sencha-touch-all-debug.js',
        'http://maps.google.com/maps/api/js?sensor=true',
        '../app/view/Location.js',
        '../app/view/Map.js',
        '../app/view/ListView.js',
        '../app/view/Info.js',
        '../app/view/Specific.js',
        '../app/view/Home.js',
        '../app/view/Detail.js',
        '../app/controller/List.js',
        '../app/store/Info.js',
        '../app/store/CountryStore.js',
        '../app/store/Education.js',
        '../app/model/City.js',
        '../app.js'
    ]
});

Harness.start(
    '010_sanity.t.js',
    'home_test.t.js',
    'list_test.t.js',
    'info_test.t.js',
    'specific_test.t.js'
    // 'simple.t.js',
    // 'sane.t.js',
    // 'HelloWorld.t.js'
);