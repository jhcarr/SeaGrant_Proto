Ext.define('MyApp.store.CountryStore', {
    extend: 'Ext.data.Store',
    // alias: 'store.countrystore', 
    config: { 
        // autoLoad: true,
        data: [
            {
                id: 0,
                name: 'please select'
            },
            {
                id: 1,
                name: 'india'
            },
            {
                id: 2,
                name: 'USA'
            },
            {
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