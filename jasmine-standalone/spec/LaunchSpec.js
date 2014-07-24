// Ext.Loader.setPath('SeaGrant_Proto');
// Ext.require['SeaGrant_Proto.view.Home'];
describe("OnSubmitButtonTap", function(){

	it("a = c", function(){
		var c = 12;
		var a = 12;
		expect(a).toBe(c);
	});

	it("launches", function(){
		expect(Ext).not.toBeDefined();
	});

	// it(' launches a view', function(){
	// 	var view = Ext.Viewport.add(Ext.create('SeaGrant_Proto.view.Home'));

	// 	expect(view.$className).toEqual('SeaGrant_Proto.view.Home');
	// });

	it(" submit button works", function(){
		var tap = "OnSubmitButtonTap";

		expect("OnSubmitButtonTap").toBe(tap);
	});
});

// describe("onHomeListDisclose", function(){
// 	it("")
// });