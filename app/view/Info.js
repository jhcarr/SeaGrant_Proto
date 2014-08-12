Ext.define('SeaGrant_Proto.view.Info', {
	extend: 'Ext.form.Panel',
    fullscreen: true,
    xtype: 'Info',
	alias: 'widget.info',
	config: {
		items: [
			{
				xtype: 'toolbar',
				title: 'Info Page',
				itemId: 'infoPageToolbar',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						ui: 'action',
						text: 'back',
						itemId: 'backDetailButton'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'specific',
						itemId: 'specificButton'
					}
				]
			}
			
		],
		listeners: [
			{
				delegate: '#backDetailButton',
				event: 'tap',
				fn: 'onBackButtonTap'
			},
			{
				delegate: '#specificButton',
				event: 'tap',
				fn: 'onSpecificButtonTap'
			}
		]
	},
	onBackButtonTap: function(){
		console.log('onBackButtonTap');
		this.fireEvent('viewBackDetailCommand', this);
	},
	onSpecificButtonTap: function(){
		console.log('onSpecificButtonTap');
		this.fireEvent('viewSpecificCommand', this);
	}
});