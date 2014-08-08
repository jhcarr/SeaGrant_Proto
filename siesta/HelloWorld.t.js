StartTest(function(test) {
	test.diag("Inside Hello");
  var myTextField = Ext.create("Ext.slider.Toggle", {
      renderTo : Ext.getBody()
  });
  var myHeader = Ext.create("Ext.form.Panel", {
  	// extend: 'Ext.form.Panel',
  	config:{
  		xtype: 'toolbar',
	  	text: 'header',
	  	dock: 'top',
	  	renderTo: Ext.getBody()
	  }  	
  });
  test.diag("Created textfield");
  test.diag(toString(Ext.ComponentQuery.query("toolbar")));
  test.click(myTextField);
 
  test.type(myTextField, 'Hello world', function() {
      test.is(myTextField.getValue(), '0', 'We did it!');
  });
  // console.log(Body);
  test.diag(myHeader.data);
  test.type(myHeader, 'Hello world', function() {
      test.is(myHeader.getData(), 'header', 'We did it!');
  });
});