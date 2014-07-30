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
				title: 'Gold Beach',
				Latlng: '42.406302, -124.419420',
				id: 'Gold Beach'
			},
			{
				title: 'Brookings',
				Latlng: '42.051287, -124.283807',
				id: 'Brookings'
			},
			{
				title: 'Depoe Bay',
				Latlng: '44.809437, -124.059516',
				id: 'Depoe Bay'
			},
			{
				title: 'Lincoln City',
				Latlng: '44.957217, -124.014541',
				id: 'Lincoln City'
			},
			{
				title: 'Tillamook',
				Latlng: '45.455024, -123.846656',
				id: 'Tillamook'
			},
			{
				title: 'Seaside',
				Latlng: '45.991815, -123.922769',
				id: 'Seaside'
			},
			{
				title: 'Astoria',
				Latlng: '46.187831, -123.833543'
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