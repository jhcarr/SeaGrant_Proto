Ext.define('SeaGrant_Proto.store.Info', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	config: {
			data: [
			{
				title: 'Newport',
				Latlng: '44.634115, -124.062796',
				id: 'Newport'
			},
			{
				title: 'Waldport',
				Latlng: '44.30737, -124.066572',
				id: 'Waldport'
			},
			{
				title: 'Florence',
				Latlng: '43.976162, -124.106741',
				id: 'Florence'
			},
			{
				title: 'Reedsport',
				Latlng: '43.706747, -124.113607',
				id: 'Reedsport'
			},
			{
				title: 'Coos bay',
				Latlng: '43.37261, -124.218664',
				id: 'Coos Bay'
			},
			{
				title: 'Bandon',
				Latlng: '43.115167, -124.409552',
				id: 'Bandon'
			},
			{
				title: 'Note 6',
				Latlng: 'Narrative 6'
			},
			{
				title: 'Note 7',
				Latlng: 'Narrative 7'
			},
			{
				title: 'Note 8',
				Latlng: 'Narrative 8'
			},
			{
				title: 'Note 9',
				Latlng: 'Narrative 9'
			},
			{
				title: 'Note 10',
				Latlng: 'Narrative 10'
			},
			{
				title: 'Note 11',
				Latlng: 'Narrative 11'
			},
			{
				title: 'Note 12',
				Latlng: 'Narrative 12'
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