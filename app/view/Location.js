Ext.define('SeaGrant_Proto.view.Location', {
	extend: 'Ext.Container',
	alias: 'widget.location',
	config: {
		layout: {
			type: 'fit'
		},
		items: [
			{
				xtype: 'toolbar',
				title: 'Location',
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
						text: 'Detail View',
						itemId: 'detailButton'
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
				delegate: '#detailButton',
				event: 'tap',
				fn: 'onDetailButtonTap'
			}
		]
	},
	onHomeButtonTap: function(list, record, target, index, evt, options){
		console.log('viewHomeCommand');
		this.fireEvent('viewHomeCommand', this, record);
	},
	onDetailButtonTap: function(list, record, target, index, evt, options){
		// We use viewListItemCommand instead of viewDesignCommand because both
		// point to the same view page and we already have a function onViewListItemCommand
		// written to navigate to this page in our controller.
		console.log('viewDetailCommand');
		this.fireEvent('viewDetailCommand', this, record);
	}
});

// Ext.define('SeaGrant_Proto.view.Location', {
// 	extend: 'Ext.Carousel',
// 	alias: 'widget.location',
// 	fullscreen: true,
// 	config: {
// 		defaults: {
// 			styleHtmlContent: true,
// 			//cls: 'card'
// 		},
// 		items: [
//             {
//                 html: 'red',
//                 style: 'background-color:#f00;'
//             }, {
//                 html: 'orange',
//                 style: 'background-color:#ffb600;'
//             }, {
//                 html: 'yellow',
//                 style: 'background-color:#ff0;'
//             }, {
//                 html: 'green',
//                 style: 'background-color:#80ff4d;'
//             }, {
//                 html: 'blue',
//                 style: 'background-color:#009dff;'
//             },
//  //        ] // items
// 	// },
// 		// This declairs a bottom toolbar and buttons
// 			{
// 				xtype: 'toolbar',
// 				docked: 'bottom',
// 				items: [
// 					{
// 						xtype: 'spacer'
// 					},
// 					{
// 						xtype: 'button',
// 						ui: 'action',
// 						text: 'Home',
// 						itemId: 'homeButton'
// 					},
// 					{
// 						xtype: 'spacer'
// 					},
// 					{
// 						xtype: 'button',
// 						ui: 'action',
// 						text: 'Location View',
// 						itemId: 'locationButton'
// 					},
// 					{
// 						xtype: 'spacer'
// 					}
// 				]
// 			}
// 		],
// 		listeners: [
// 			// Bottom button listeners
// 			{
// 				delegate: '#homeButton',
// 				event: 'tap',
// 				fn: 'onHomeButtonTap'
// 			},
// 			{
// 				delegate: '#locationButton',
// 				event: 'tap',
// 				fn: 'onLocationButtonTap'
// 			}
// 		]
// 	},
// 	onHomeButtonTap: function(list, record, target, index, evt, options){
// 		console.log('viewHomeCommand');
// 		this.fireEvent('viewHomeCommand', this, record);
// 	},
// 	onLocationButtonTap: function(list, record, target, index, evt, options){
// 		console.log('viewLocationCommand');
// 		this.fireEvent('viewLocationCommand', this, record);
// 	}
// });