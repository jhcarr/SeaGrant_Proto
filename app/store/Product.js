Ext.define('SeaGrant_Proto.store.Product', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	// id: 'thisStuff',
	config: {
		model: 'SeaGrant_Proto.model.Products',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'newProducts.json',
			reader: {
				type: 'json',
				rootProperty: 'products'
			}
		}
	}
});