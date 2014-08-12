StartTest(function(t) {
    t.diag("Home Page Tests");

    // Header test 
    var tool = Ext.ComponentQuery.query('toolbar');
    // console.log('This is the toolbar: ');
    // console.log(tool);
    t.is(tool[0].config.itemId, 'homePageToolbar', "We have a Header");

    // User location toggle test
    var tog = Ext.ComponentQuery.query('togglefield[name=userlocation]');
    // console.log("Here is tog[0].config.name: ");
    // console.log(tog[0].config.name);
    t.click(tog);
    // This checks that a toggle button exists
    t.is(tog[0]._component._value[0], '0', 'We have a togglefield for user location');
    // Now check that when the toggle is toggled, an event is fired and recieved by the controller
    // t.is(tog[0].eventDispatcher.listenerStacks.component.home."fired event".listeners.current[0].fn.$name, 'controller function name', 'The user location sends current user location data');

    // Location drop list test
    var sel = Ext.ComponentQuery.query('selectfield[itemId=location]');
    // console.log("This is the Location selectfield: ");
    // console.log(sel);
    t.is(sel[0].config.itemId, 'location', " We have a Location selectfield");

    // // Product drop list test
    // var loc = Ext.ComponentQuery.query('selectfield[itemId=product]');
    // // console.log("This is the Product selectfield: ");
    // // console.log(loc);
    // t.is(loc[0].config.itemId, 'product', " We have a Product selectfield");

    // // Optional sort function test
    // var sortvend = Ext.ComponentQuery.query('fieldcontainer[itemId=vendor]');
    // var sortprod = Ext.ComponentQuery.query('fieldcontainer[itemId=product]');
    // console.log("Sorting by vendor:");
    // console.log('sortvend');
    // console.log("Sorting by product:");
    // console.log('sortprod');
    // // Checks that the two checkboxes exist
    // t.is(sortvend[0]._itemId, 'vendor', 'Vendor checkbox exists');
    // t.is(sortprod[0]._itemId, 'product', 'Product checkbox exists');
    // // Now check that the check boxes fire the correct event to the controller
    // t.is(sortvend[0].eventDispatcher.listenerStacks.component.home.sortByVendorCommand.listeners.current[0].fn.$name, 'onSortByVendorCommand', 'The vendor checkbox is used to sort the listpage list');
    // t.is(sortprod[0].eventDispatcher.listenerStacks.component.home.sortByProductCommand.listeners.current[0].fn.$name, 'onSortByProductCommand', 'The product checkbox is used to sort the listpage list');
    
    // Go button test
    var go = Ext.ComponentQuery.query('button[itemId=goButton]');
    // console.log("This is the Go button: ");
    // console.log(go); 
    t.click(go);
    // console.log(go);
    // Check that the button exists here
    t.is(go[0]._itemId, 'goButton', " We have a Go button");
    // console.log(go[0].eventDispatcher.listenerStacks.component.home.viewGoCommand.listeners.current[0].fn.$name);
    // When Go button is pressed it should fire an event to the controller that should use a function to change 
    // the view to the list page, in this case the function is onViewGoCommand
    t.is(go[0].eventDispatcher.listenerStacks.component.home.viewGoCommand.listeners.current[0].fn.$name, 'onViewGoCommand', 'The Go button sends us to the list page.');
   

    t.done();   // Optional, marks the correct exit point from the test
});  



