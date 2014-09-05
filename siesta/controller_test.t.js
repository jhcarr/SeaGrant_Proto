StartTest(function(t) {
    t.diag("Controller Tests");

     t.diag("Home Function Tests"); //###############################################################################################
    // User location toggle test


    var tog = Ext.ComponentQuery.query('togglefield[name=userlocation]');
    // USED TO CHECK TOGGLE NOT SENDING DATA WHEN OFF
    console.log("Here is tog[0].config.name: ");
    console.log(tog[0]._component._value[0]);
    // None of the click definitions in Siesta documentation work to set togglefield on, thus we are not able to 
    // test if the user position is set when user position is set to on. We are currently only able to test the 
    // initial settings of the app. Mocking usability is not working at the moment.
   //   t.chain(
	  //   {
			// click: '>> togglefield[name=userlocation]'
	  //   }
   //   );
	t.click('>> togglefield[name=userlocation]');
    console.log(tog[0]._component);
    console.log(tog[0]._component._value[0]);
    t.is(tog[0]._component._value[0], 1, 'toggle works');
    t.expect(SeaGrant_Proto.pos).toBeFalsy();

    // t.is(tool[0].config.itemId, 'homePageToolbar', "onSetDistance Function");

    // t.is(tool[0].config.itemId, 'homePageToolbar', "onChooseLocation Function");  
    SeaGrant_Proto.location ='Newport';
    SeaGrant_Proto.testStore = 'what';
    var sel = Ext.ComponentQuery.query('selectfield[itemId=selectlocation]');
    console.log(sel);
    // t.isCalled(onChooseLocation, )
    t.expect(SeaGrant_Proto.location).toBeFalsy();
    // t.it('Should get 5 vendors in Newport', function(t){
    // 	SeaGrant_Proto.location = 'Newport';
    // 	t.expect(SeaGrant_Proto.testStore.getCount()).toBe(5);
    // });
    // t.is(tool[0].config.itemId, 'homePageToolbar', "onChooseProduct Function");
    t.expect(SeaGrant_Proto.product).toBeFalsy();
    // t.is(tool[0].config.itemId, 'homePageToolbar', "onSortByVendorCommand Function");
    // t.is(tool[0].config.itemId, 'homePageToolbar', "onSortByProductCommand Function");
    // t.is(tool[0].config.itemId, 'homePageToolbar', "onViewGoCommand Function");
 t.done();   // Optional, marks the correct exit point from the test
});  

  