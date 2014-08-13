Ext.define('SeaGrant_Proto.controller.List', {
	extend: 'Ext.app.Controller',
	requires: 'Ext.MessageBox',
	alias: 'cont',
	config: {
		refs: {
			homeView: 'home',
			detailView: 'detail',
			locationView: 'location',
			listView: 'listview',
			infoView: 'info',
			specificView: 'specific'
		},
		control: {
			homeView: {
				viewGoCommand: 'onViewGoCommand',
				setUseLocation: 'onSetUseLocation',
				chosenLocation: 'onChooseLocation',
				chosenProduct: 'onChooseProduct',
				sortByVendorCommand: 'onSortByVendorCommand',
				sortByProductCommand: 'onSortByProductCommand'
				
			},
			listView: {
				viewBackHomeCommand: 'onViewBackHomeCommand',
				viewInfoCommand: 'onViewInfoCommand',
				viewLpageListItemCommand: 'onViewLpageListItemCommand'
			},
			detailView: {
				viewHomeCommand: 'onViewHomeCommand',
				viewLocationCommand: 'onViewLocationCommand'
			},
			locationView: {
				viewDetailCommand: 'onViewDetailCommand',
				viewHomeCommand: 'onViewHomeCommand'
			},
			infoView: {
				viewBackDetailCommand: 'onViewBackDetailCommand',
				viewSpecificCommand: 'onViewSpecificCommand',
				viewIpageListItemCommand: 'onViewIpageListItemCommand'
			},
			specificView: {
				viewBackInfoCommand: 'onViewBackInfoCommand'
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
	// Functions dealing with home page stuff
	onViewGoCommand: function(){
		console.log('In controller: onViewGoCommand');
		Ext.Viewport.animateActiveItem(this.getListView(), this.slideLeftTransition);
		console.log('go to list page');
	},
	onChooseLocation: function(){
		console.log('In controller: onChooseLocation');
	},
	onChooseProduct: function(){
		console.log('In controller: onChooseProduct');
	},
	onSetUseLocation: function(){
		console.log('In controller: onSetUseLocation');
	},
	onSortByVendorCommand: function(){
		console.log('In controller: onSortByVendorCommand');
	},
	onSortByProductCommand: function(){
		console.log('In controller: onSortByProductCommand');
	},
	// Functions dealing with list page stuff
	onViewInfoCommand: function(){
		console.log('In controller: onViewInfoCommand');
		Ext.Viewport.animateActiveItem(this.getInfoView(), this.slideLeftTransition);
		console.log('go to Info page');
	},
	onViewBackHomeCommand: function(){
		console.log('In controller: onViewBackHomeCommand');
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
		console.log('back to home page');
	},
	onViewLpageListItemCommand: function(record, list, index){
		console.log('onViewLpageListItemCommand');
		Ext.Msg.alert(index.data.title, 'This is the selected list item.');
	},
	// Functions dealing with info page stuff
	onViewSpecificCommand: function(){
		console.log('In controller: onViewSpecificCommand');
		Ext.Viewport.animateActiveItem(this.getSpecificView(), this.slideLeftTransition);
		console.log('go to Specific page');
	},
	onViewBackDetailCommand: function(){
		console.log('In controller: onViewBackDetailCommand');
		Ext.Viewport.animateActiveItem(this.getListView(), this.slideRightTransition);
		console.log('back to detail page');
	},
	onViewIpageListItemCommand: function(record, list, index){
		console.log('onViewIpageListItemCommand');
		Ext.Msg.alert(index.data.listItem, 'This is the stuff I selected.');
		// var tool =Ext.ComponentQuery.query('toolbar[itemId=infoPageToolbar]')[0];
		// console.log(tool);
		// var tool2 =Ext.ComponentQuery.query('toolbar[itemId=infoPageToolbar]')[0].setTitle(index.data.listItem);
		// console.log(tool2);
		Ext.ComponentQuery.query('toolbar[itemId=specificPageToolbar]')[0].setTitle(index.data.listItem);
		Ext.Viewport.animateActiveItem(this.getSpecificView(), this.slideLeftTransition);
	},
	// Functions dealing with specific page stuff
	onViewBackInfoCommand: function(){
		console.log('In controller: onViewBackInfoCommand');
		Ext.Viewport.animateActiveItem(this.getInfoView(), this.slideRightTransition);
		console.log('back to info page');
	},
	// Functions dealing with OLD stuff
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
		// console.log("launch");
	},
	init: function(){
		this.callParent(arguments);
		// console.log("init");
	}
});