Ext.define('SeaGrant_Proto.view.Detail', {
	extend: 'Ext.Carousel',
	requires: ['Ext.MessageBox', 'Ext.dataview.List'],
	alias: 'widget.detail',
	fullscreen: true,
	config: {
		defaults: {
			styleHtmlContent: true
		},
		items: [
            {
                html: 'Company Details',
                style: 'background-color:#f00;'
            },
      //       {
	     //        config: {
						// 	scrollable: {
						// 		direction: 'vertical',
						// 		directionLock: true	
						// 	}
						// },
						// xtype: 'list',
						// store: 'Info',
						// itemId: 'homeList',
						// loadingText: 'Loading Notes ...',
						// emptyText: '</pre><div class="\&quot;notes-list-empty-text\&quot;">No notes found.</div><pre>',
						// itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-Latlng">{Latlng}</div><pre>'
      //       }, 
            {
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
			// This declairs a bottom toolbar and buttons
			{
				xtype: 'titlebar',
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
	onHomeButtonTap: function(list, record, target, index, evt, options){
		console.log('viewHomeCommand');
		console.log("home button index");
		console.log(index);
		this.fireEvent('viewHomeCommand', this, record, index);
	},
	onLocationButtonTap: function(list, record, target, index, evt, options){
		console.log('viewLocationCommand');
		this.fireEvent('viewLocationCommand', this, record);
	}
});