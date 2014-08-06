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
		// Set title to list item title
		var newTitle = index.data.title;
		Ext.ComponentQuery.query('titlebar')[0].setTitle(newTitle);
		console.log("onViewListItemCommand");
		// Set data for each item in carousel
		var detailView = this.getDetailView();
		console.log('length: ', detailView.carouselItems.length);
        for(var i = 1; i <= detailView.carouselItems.length; i++){
        	detailView.getAt(i).setData(index.getData());
      	}
      	// Setting the active viewport
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