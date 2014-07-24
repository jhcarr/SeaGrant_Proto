Ext.define('SeaGrant_Proto.view.Detail', {
	extend: 'Ext.Carousel',
	requires: 'Ext.MessageBox',
	alias: 'widget.detail',
	fullscreen: true,
	config: {
		refs: {
			cont: 'cont'
		},
		control: {
			cont: {
				passingRecord: 'onPassingRecord'
			}
		}
	},
	config: {
		defaults: {
			styleHtmlContent: true,
			title: ''+this.record+'',
			tpl: 'Hello'
			
		},
		items: [
            {
                html: 'red',
                style: 'background-color:#f00;'
            }, {
                html: 'orange',
                style: 'background-color:#ffb600;'
            }, {
                html: 'yellow',
                style: 'background-color:#ff0;'
            }, {
                html: 'green',
                style: 'background-color:#80ff4d;'
            }, {
                html: 'blue',
                style: 'background-color:#009dff;'
            },
 //        ] // items
	// },
		// This declairs a bottom toolbar and buttons
			{
				xtype: 'toolbar',
				// text: '{title',
				// styleHtmlContent: true,
				// cls: 'storeName',
				// Tpl: '<div class="ListItemContent">{title}</div>',
				// text: record,
				docked: 'top'
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
						text: 'Home',
						itemId: 'homeButton'
					},
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'Location View',
						itemId: 'locationButton'
					},
					{
						xtype: 'spacer'
					}
				]
			}
		],
		listeners: [
			// Bottom button listeners
			{
				delegate: '#homeButton',
				event: 'tap',
				fn: 'onHomeButtonTap'
			},
			{
				delegate: '#locationButton',
				event: 'tap',
				fn: 'onLocationButtonTap'
			}
		]
	},
	// onPassingRecord: function(record){
	// 	console.log('onPassingRecord');
	// 	Ext.Msg.alert(''+ record + ', its cool');
	// },
	onHomeButtonTap: function(list, record, target, index, evt, options){
		console.log('viewHomeCommand');
		Ext.Msg.alert(''+ record+ ', its cool');
		this.fireEvent('viewHomeCommand', this, record);
	},
	onLocationButtonTap: function(list, record, target, index, evt, options){
		console.log('viewLocationCommand');
		this.fireEvent('viewLocationCommand', this, record);
	}
});