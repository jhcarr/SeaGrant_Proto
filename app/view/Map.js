Ext.define('SeaGrant_Proto.view.Map', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'SeaGrantMap',
 
    config: {
        title: 'PlaygroundMap',
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    // center: new google.maps.LatLng(44.638477,-124.060546),
                    // mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15
                }
            }
        ]
    },
 
    initialize: function(){
        this.callParent(arguments);
        this.initMap();
    },
 
    initMap: function(){
 
        var mapPanel = this.down('map');
        
        var map = mapPanel.getMap();
        // var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
        // panoramioLayer.setMap(gMap);
        
        // var marker = new google.maps.Marker({
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     position: new google.maps.LatLng(44.638477,-124.060546)
        // });
 
    }
    
});