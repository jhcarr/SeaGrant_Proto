StartTest(function(t) {
    t.diag("Home Page Tests");

    t.ok('jafojfeijfkwjjo', 'This works');

    Ext.Loader.setPath({
        'Ext.ux': '../app/view/Home'
    });
    console.log(toolbar);
    console.log(selectfield);
    t.ok(togglefield, 'We have a togglefield for user location');
    // t.chain(
    // // {waitFor: 'EventsToRender', args:[]},
    // function(next){
    // 	var cmp = t.cq1('home');
    // 	t.willFireNTimes(cmp, 'viewchange', 1);
    // 	next();
    // },
    // // {
    // // 	action: "click", target: "home button[text=Go] => .x-btn-inner"
    // // },
    // {
    // 	action: "click", target: "home button[text=Go] => .x-btn-inner"
    // }
    // );
    // click: '>>button[text=Re-run test]';
	// t.chain(
	// 	{
			
	// 	}
	// );

    // t.ok(Your.Project.Util, '.. indeed');

    t.done();   // Optional, marks the correct exit point from the test
})    