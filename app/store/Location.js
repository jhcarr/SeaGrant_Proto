Ext.define('SeaGrant_Proto.store.Location', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	// id: 'thisStuff',
	config: {
		model: 'SeaGrant_Proto.model.Locations',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'newLocations.json',
			reader: {
				type: 'json',
				rootProperty: 'locations'
			}
		}
	}
});