Ext.define('SeaGrant_Proto.view.ListView', {
	extend: 'Ext.form.Panel',
    fullscreen: true,
    xtype: 'ListView',
	alias: 'widget.listview',
	config: {
		layout: {
			type: 'fit'
		},
		items: [
			{
				xtype: 'toolbar',
				title: 'List Page',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						ui: 'action',
						text: 'back',
						itemId: 'backButton'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'Info',
						itemId: 'infoButton'
					}
				]
			},
			{
				xtype: 'SeaGrantMap'
			},
			{

			}
		],
		listeners: [
			{
				delegate: '#backButton',
				event: 'tap',
				fn: 'onBackButtonTap'
			},
			{
				delegate: '#infoButton',
				event: 'tap',
				fn: 'onInfoButtonTap'
			}
		]
	},
	onBackButtonTap: function(){
		console.log('onBackButtonTap');
		this.fireEvent('viewBackHomeCommand', this);
	},
	onInfoButtonTap: function(){
		console.log('onInfoButtonTap');
		this.fireEvent('viewInfoCommand', this);
	}
});