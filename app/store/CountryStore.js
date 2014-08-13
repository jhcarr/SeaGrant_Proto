Ext.define('SeaGrant_Proto.store.CountryStore', {
    extend: 'Ext.data.Store',
    // alias: 'store.countrystore', 
    config: { 
        autoLoad: true,
        data: [
            {
                text: 'Here is country 1',
                id: 0,
                name: 'please select'
            },
            {
                text: 'Here is country 2',
                id: 1,
                name: 'india'
            },
            {
                text: 'Here is country 3',
                id: 2,
                name: 'USA'
            },
            {
                text: 'Here is country 4',
                id: 3,
                name: 'UK'
            }
        ], 
        storeId: 'Countries', 
        fields: [
           {
                name: 'id'
            },
            {
                name: 'name'
            }
        ]
    }
});