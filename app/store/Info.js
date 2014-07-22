Ext.define('SeaGrant_Proto.store.Info', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	config: {
			data: [
			{
				title: 'Note 1',
				narrative: 'Narrative 1'
			},
			{
				title: 'Note 2',
				narrative: 'Narrative 2'
			},
			{
				title: 'Note 3',
				narrative: 'Narrative 3'
			},
			{
				title: 'Note 4',
				narrative: 'Narrative 4'
			},
			{
				title: 'Note 5',
				narrative: 'Narrative 5'
			},
			{
				title: 'Note 6',
				narrative: 'Narrative 6'
			}
		]
		// model: 'SeaGrant_Proto.model.ListForm',
		// proxy: {
		// 	type: 'localstorage',
		// 	id: 'info-app-store'
		// },
		// sorters: [
		// 	{
		// 		property: '',
		// 		direction: 'DESC'
		// 	}
		// ]
	}
});