Ext.define('SeaGrant_Proto.view.Home', {
	extend: 'Ext.Panel',
	requires: ['Ext.form.FieldSet', 'Ext.TabPanel', 'Ext.dataview.List', 'Ext.MessageBox', 'SeaGrant_Proto.view.Map'],
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
								directionLock: true
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
						iconCls: 'maps',
						xtype:'SeaGrantMap'
					}
				]
			},	
			
			{
				xtype: 'fieldset',
				itemId: 'filter',
				items: [	
					{
						html:'Filter by City or Product'
					},			
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
					}
					
				]
			}
		
		],
		listeners: [
			{
				delegate: '#submitButton',
				event: 'tap',
				fn: 'onSubmitButtonTap'
			}
		]
	},
	onHomeListDisclose: function(list, record, target, index, evt, options){
		console.log('viewListItemCommand');
		this.fireEvent("viewListItemCommand", record);
	},
	onSubmitButtonTap: function(){
		console.log('onSubmitButtonTap');
		this.fireEvent("onSubmitButtonTap");
	}

});