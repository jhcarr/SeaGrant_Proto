Ext.define('SeaGrant_Proto.model.City', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.Field'],
    config: {
        fields:[
        	'city',
        	'updated',
        	'description',
        	'zip',
        	'created',
        	'ext',
        	'location_description',
        	'long',
        	'email',
        	'website',
        	'phone',
        	'state',
        	'street',
        	'products',
        	'lat',
        	'contact_name',
        	'story',
        	'name',
            'value'
        ]
    }
});
