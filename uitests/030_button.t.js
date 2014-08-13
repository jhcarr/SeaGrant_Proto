StartTest(function(t){
	t.wait('submitButton')
	t.chain(
		function (next){
			t.isElementVisable('Map View');
		}
		);
});
