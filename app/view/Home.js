Ext.define('SeaGrant_Proto.view.Home', {
	extend: 'Ext.form.Panel',
	requires: 'Ext.form.FieldSet',
	xtype: 'Home',
	aliais: 'widget.home',
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
					}
				]
			 },			
			 {
				xtype: 'toolbar',
				docked: 'bottom',
				items: [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'Map View',
						itemId: 'mapButton'
					},
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'List View',
						itemId: 'listButton'
					},
					{
						xtype: 'spacer'
					}
				]
			}
		],
		listeners: [
			{
				delegate: '#mapButton',
				event: 'tap',
				fn: 'onMapButtonTap'
			},
			{
				delegate: '#listButton',
				event: 'tap',
				fn: 'onListButtonTap'
			},
			{
				delegate: '#submitButton',
				event: 'tap',
				fn: 'onSubmitButtonTap'
			}
		]
	},
	onSubmitButtonTap: function(){
		console.log("onSubmitButtonTap");
		this.fireEvent("onSubmitButtonTap");
	},
	onListButtonTap: function(){
		console.log("onListButtonTap");
		this.fireEvent("onListButtonTap", this);
	},
	onMapButtonTap: function(){
		console.log("onMapButtonTap");
		this.fireEvent("onMapButtonTap", this);
	}

});