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
						text: 'specific',
						itemId: 'specificButton'
					}
				]
			}
			
		],
		listeners: [
			{
				delegate: '#backButton',
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