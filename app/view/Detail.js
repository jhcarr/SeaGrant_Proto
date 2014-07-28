Ext.define('SeaGrant_Proto.view.Detail', {
	extend: 'Ext.Carousel',
	requires: 'Ext.MessageBox',
	alias: 'widget.detail',
	fullscreen: true,
	// config: {
	// 	refs: {
	// 		cont: 'cont'
	// 	},
	// 	control: {
	// 		cont: {
	// 			passingRecord: 'onPassingRecord'
	// 		}
	// 	}
	// },
	config: {
		defaults: {
			styleHtmlContent: true,

			// title: 'Details'
			// tpl: 'Hello'
			
		},
		items: [
            {
                html: 'Company Details',
                style: 'background-color:#f00;'
            }, {
                html: 'Products',
                style: 'background-color:#ffb600;'
            }, {
                html: 'History',
                style: 'background-color:#ff0;'
            }, {
                html: 'Awards',
                style: 'background-color:#80ff4d;'
            }, {
                html: 'Fun Facts',
                style: 'background-color:#009dff;'
            },
 //        ] // items
	// },
		// This declairs a bottom toolbar and buttons
			{
				xtype: 'titlebar',
				title: 'Details',
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
					// {
					// 	xtype: 'spacer'
					// },
					// {
					// 	xtype: 'button',
					// 	ui: 'action',
					// 	text: 'index',
					// 	itemId: 'indexButton'
					// },
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
			// {
			// 	delegate: '#indexButton',
			// 	event: 'tap',
			// 	fn: 'onIndexButtonTap'
			// },
			{
				delegate: '#locationButton',
				event: 'tap',
				fn: 'onLocationButtonTap'
			}
		]
	},
	// onIndexButtonTap: function(record, index){
	// 	console.log('onPassingRecord');
	// 	console.log(record);
	// 	console.log(index);
		
	// },

	onHomeButtonTap: function(list, record, target, index, evt, options){
		console.log('viewHomeCommand');
		// var details = Ext.create()
		// console.log(list);
		// console.log(record);
		console.log("home button index");
		console.log(index);
		// console.log(evt);
		// console.log(options);
		// Ext.Msg.alert(''+ index.data+ ', its cool');
		this.fireEvent('viewHomeCommand', this, record, index);
	},
	onLocationButtonTap: function(list, record, target, index, evt, options){
		console.log('viewLocationCommand');
		this.fireEvent('viewLocationCommand', this, record);
	}
});