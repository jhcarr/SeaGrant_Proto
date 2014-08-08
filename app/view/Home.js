// Ext.define('SeaGrant_Proto.view.Home', {
// 	extend: 'Ext.Panel',
// 	requires: ['Ext.form.FieldSet', 'Ext.form.Panel', 'Ext.TabPanel', 'Ext.dataview.List', 'Ext.MessageBox', 'SeaGrant_Proto.view.Map'],
// 	xtype: 'Home',
// 	alias: 'widget.home',
// 	config: {
// 		// layout: {
// 		// 	type: 'fit'
// 		// },
// 		items: [
// 			{
// 				xtype: 'toolbar',
// 				title: 'Whats Fresh?',
// 				docked: 'top'
// 			},
// 			{
// 				xtype: 'selectfield',			
// 				itemId: 'Country',
// 				label: 'Location',
// 				labelWrap: true,
// 				displayfield: 'name',
// 				store: 'Info',
// 				valuefield: 'title'
// 			},
// 			{
// 				xtype: 'selectfield',			
// 				itemId: 'id',
// 				label: 'Product',
// 				labelWrap: true,
// 				displayfield: 'LatLong',
// 				store: 'Info',
// 				valuefield: 'id'
// 			}		
// 		],
// 		listeners: [
// 			{
// 				delegate: '#Country',
// 				event: 'change',
// 				fn: 'onCountryChange'
// 			},
// 			{
// 				delegate: '#State',
// 				event: 'change',
// 				fn: 'onStateChange'
// 			}
// 		]
// 	},
// 	onHomeListDisclose: function(list, record, target, index, evt, options){
// 		console.log('viewListItemCommand');
// 		console.log("list index");
// 		console.log(index);
// 		this.fireEvent("viewListItemCommand", this, record, index);
// 	},
// 	onSubmitButtonTap: function(){
// 		console.log('onSubmitButtonTap');
// 		Ext.Msg.alert('Sorting future list data');
// 		this.fireEvent("onSubmitButtonTap");
// 	}
// });

Ext.define('SeaGrant_Proto.view.Home', {
	extend: 'Ext.form.Panel',
    fullscreen: true,
    xtype: 'Home',
	alias: 'widget.home',
	config: {
		items: [
			{
				xtype: 'toolbar',
				title: 'Whats Fresh?',
				docked: 'top'
			},
			{
				xtype: 'togglefield',
				name: 'userlocation',
				label: 'Use Current Locaton'
			},
	        {
	            xtype: 'fieldset',
	            items: [
	                {
	                    xtype: 'selectfield',
	                    label: 'Choose one',
	                    options: [
	                        {text: 'First Option',  value: 'first'},
	                        {text: 'Second Option', value: 'second'},
	                        {text: 'Third Option',  value: 'third'}
	                    ]
	                },
	                {
						xtype: 'selectfield',			
						// itemId: 'id',
						label: 'Location',
						// labelWrap: true,
						// displayfield: 'id',
						store: 'stuff',
						// valuefield: 'id'
					},				
	                {
						xtype: 'selectfield',			
						// itemId: 'id',
						label: 'Product',
						// labelWrap: true,
						// displayfield: 'id',
						store: 'stuff',
						// valuefield: 'id'
					}					
	            ]	                  
	        },
	        {
				xtype: 'button',
				ui: 'action',
				text: 'Go',
				itemId: 'goButton'
			}
	    ],
	    listeners: [
			{
				delegate: '#goButton',
				event: 'tap',
				fn: 'onGoButtonTap'
			}
		]	      
	},
	onGoButtonTap: function(list, record, target, index, evt, options){
		console.log('viewGoCommand');
		this.fireEvent('viewGoCommand', this, record);
	}
});