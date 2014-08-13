StartTest(function(t) {
    t.diag("List Page Tests");

    // Header test 
    var tool = Ext.ComponentQuery.query('toolbar');
    // console.log('This is the toolbar: ');
    // console.log(tool);
    t.is(tool[4].config.itemId, 'listPageToolbar', "We have a Header");

    // Back button test
    var Bbtn = Ext.ComponentQuery.query('button[itemId=backInfoButton]');
    // console.log("Here is Bbtn: ");
    // console.log(Bbtn[0]._itemId);
    t.click(Bbtn);
    t.is(Bbtn[0]._itemId, 'backInfoButton', 'We have a back button to home page');

    // Data displayed test
    

    t.done();   // Optional, marks the correct exit point from the test
});  