Ext.define('SeaGrant_Proto.store.Info', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	config: {
			data: [
			{
				title: 'Newport',
				narrative: '44.634115, -124.062796',
				id: 'Newport'
			},
			{
				title: 'Waldport',
				narrative: '44.30737, -124.066572',
				id: 'Waldport'
			},
			{
				title: 'Florence',
				narrative: '43.976162, -124.106741',
				id: 'Florence'
			},
			{
				title: 'Reedsport',
				narrative: '43.706747, -124.113607',
				id: 'Reedsport'
			},
			{
				title: 'Coos bay',
				narrative: '43.37261, -124.218664',
				id: 'Coos Bay'
			},
			{
				title: 'Bandon',
				narrative: '43.115167, -124.409552',
				id: 'Bandon'
			},
			{
				title: 'Note 6',
				narrative: 'Narrative 6'
			},
			{
				title: 'Note 7',
				narrative: 'Narrative 7'
			},
			{
				title: 'Note 8',
				narrative: 'Narrative 8'
			},
			{
				title: 'Note 9',
				narrative: 'Narrative 9'
			},
			{
				title: 'Note 10',
				narrative: 'Narrative 10'
			},
			{
				title: 'Note 11',
				narrative: 'Narrative 11'
			},
			{
				title: 'Note 12',
				narrative: 'Narrative 12'
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