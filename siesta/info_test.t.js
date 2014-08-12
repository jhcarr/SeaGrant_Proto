StartTest(function(t) {
    t.diag("Info Page Tests");

    // Header test 
    var tool = Ext.ComponentQuery.query('toolbar');
    // console.log('This is the toolbar: ');
    // console.log(tool);
    t.is(tool[5].config.itemId, 'infoPageToolbar', "We have a Header");

    // Back button test
    var Bbtn = Ext.ComponentQuery.query('button[itemId=backDetailButton]');
    // console.log("Here is Bbtn: ");
    // console.log(Bbtn[0]);
    t.click(Bbtn);
    // Checks that button exists 
    t.is(Bbtn[0]._itemId, 'backDetailButton', 'We have a back button to detail page');
    // Now check that button fires correct event to controller
    t.is(Bbtn[0].eventDispatcher.listenerStacks.component.info.viewBackDetailCommand.listeners.current[0].fn.$name, 'onViewBackDetailCommand', 'The Back button sends us to the Detail page.');

   // // Data displayed test
   // var fixed = Ext.ComponentQuery.query('list[itemId=Ipagelist]');
   // console.log(fixed);
   // // Check that the list exists
   // t.is(fixed[0]._itemId, 'Ipagelist', 'List exists');
   // // Check on list item select
   // t.is(fixed[0]., 'onViewSpecificCommand', 'Selecting a list item sends us to the specific page.');
    

    t.done();   // Optional, marks the correct exit point from the test
});  