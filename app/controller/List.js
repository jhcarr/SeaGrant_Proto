Ext.define('SeaGrant_Proto.controller.List', {
	extend: 'Ext.app.Controller',
	requires: 'Ext.MessageBox',
	alias: 'cont',
	config: {
		refs: {
			homeView: 'home',
			detailView: 'detail',
			locationView: 'location'
		},
		control: {
			homeView: {
				viewListItemCommand: 'onViewListItemCommand'
			},
			detailView: {
				viewHomeCommand: 'onViewHomeCommand',
				viewLocationCommand: 'onViewLocationCommand'
			},
			locationView: {
				// Note we us this command because it points to the 
				// same view as the list select. You can think of it
				// as viewDetailcommand from location view.
				viewDetailCommand: 'onViewDetailCommand',
				viewHomeCommand: 'onViewHomeCommand'
			}
		}
	},
	slideLeftTransition: {
		type: 'slide',
		direction: 'left'
	},
	slideRightTransition: {
		type: 'slide',
		direction: 'right'
	},
	onViewLocationCommand: function(){
		console.log('onViewLocationCommand');
		Ext.Viewport.animateActiveItem(this.getLocationView(), this.slideLeftTransition);
		console.log('in location');
	},
	onViewHomeCommand: function(){
		console.log('onViewHomeCommand');
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
	},
	onViewDetailCommand: function(){
		console.log("onViewListItemCommand");
		Ext.Viewport.animateActiveItem(this.getDetailView(), this.slideRightTransition);
		console.log("in detail view");
	},
	onViewListItemCommand: function(record, list, index){
		console.log("Controller index");
		console.log(index);
		var newTitle = index.data.title;
		// Ext.Msg.alert(''+ index.data.title + ', listviewcommand');
		console.log("onViewListItemCommand");
		var detailView = this.getDetailView();
		detailView.setRecord(record);
		Ext.ComponentQuery.query('titlebar')[0].setTitle(newTitle);
		Ext.Viewport.animateActiveItem(detailView, this.slideLeftTransition);
		
		console.log("in detail view");
	},
	launch: function(){
		this.callParent(arguments);
		console.log("launch");
	},
	init: function(){
		this.callParent(arguments);
		console.log("init");
	}
});