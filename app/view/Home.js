Ext.define('SeaGrant_Proto.view.Home', {
	extend: 'Ext.Container',
	requires: ['Ext.form.FieldSet', 'Ext.TabPanel', 'Ext.dataview.List'],
	xtype: 'Home',
	alias: 'widget.home',
	config: {
		layout: {
			type: 'fit'
		},
		items: [
			{
				xtype: 'toolbar',
				title: 'Whats Fresh?',
				docked: 'top'
			},
			{
				xtype: 'tabpanel',			
				tabBarPosition: 'bottom',
				defaults: {
					styleHtmlContext: true
				},
				items:[
					
					{
						title: 'List View',
						iconCls: 'user',
						config: {
							scrollable: {
								direction: 'vertical',
								directionLock: true,
								// trying to set scroll bar always visible
								// indicators: { 
								// 	y: {
								// 		autoHide: false
								// 	}
								// }
							}
						},
						xtype: 'list',
						store: 'Info',
						itemId: 'homeList',
						loadingText: 'Loading Notes ...',
						emptyText: '</pre><div class="\&quot;notes-list-empty-text\&quot;">No notes found.</div><pre>',
						// onItemDisclosure: true,
						// onItemTap: true,
						// grouped: true,
						itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div><pre>'
					},
					{
						title: 'Map View',
						iconCls: 'home',
						html: 'Map View'
					}
				]
			},	
			{
				html:'Filter by City or Product:'
			},
			{
				xtype: 'fieldset',
				itemId: 'filter',
				items: [					
					{
						xtype: 'textfield',
						name: 'city',
						label: 'City'
					},
					{
						xtype: 'textfield',
						name: 'product',
						label: 'Product'
					},
					{
						xtype: 'button',
						ui: 'go',
						text: 'Submit',
						itemId: 'submitButton'
					},
					
				]
			}
			// This declairs a bottom toolbar and buttons
			// {
			// 	xtype: 'toolbar',
			// 	docked: 'bottom',
			// 	items: [
			// 		{
			// 			xtype: 'spacer'
			// 		},
			// 		{
			// 			xtype: 'button',
			// 			ui: 'action',
			// 			text: 'Map View',
			// 			itemId: 'mapButton'
			// 		},
			// 		{
			// 			xtype: 'spacer'
			// 		},
			// 		{
			// 			xtype: 'button',
			// 			ui: 'action',
			// 			text: 'List View',
			// 			itemId: 'listButton'
			// 		},
			// 		{
			// 			xtype: 'spacer'
			// 		}
			// 	]
			// }
		],
		listeners: [
			// Bottom button listeners
			// {
			// 	delegate: '#mapButton',
			// 	event: 'tap',
			// 	fn: 'onMapButtonTap's
			// },
			// {
			// 	delegate: '#listButton',
			// 	event: 'tap',
			// 	fn: 'onListButtonTap'
			// },
			// This listener is used to get an event when a list item is selected
			{
				delegate: '#homeList',
				event: 'itemtap',
				fn: 'onHomeListDisclose'
			},
			// {
			// 	delegate: '#homeList',
			// 	event: 'disclose',
			// 	fn: 'onHomeListDisclose'
			// },
			{
				delegate: '#submitButton',
				event: 'tap',
				fn: 'onSubmitButtonTap'
			}
		]
	},
	onHomeListDisclose: function(list, record, target, index, evt, options){
		console.log('viewListItemCommand');
		this.fireEvent("viewListItemCommand", this, record);
		Ext.Msg.alert('list item chosen", "its cool');
	},
	onSubmitButtonTap: function(){
		console.log('onSubmitButtonTap');
		this.fireEvent("onSubmitButtonTap");
	}
	// onListButtonTap: function(){
	// 	console.log("onListButtonTap");
	// 	this.fireEvent("onListButtonTap", this);
	// },
	// onMapButtonTap: function(){
	// 	console.log("onMapButtonTap");
	// 	this.fireEvent("onMapButtonTap", this);
	// }

});