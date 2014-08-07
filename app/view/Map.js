// Ext.define('SeaGrant_Proto.view.Map', {
//     extend: 'Ext.Container',
//     requires: ['Ext.Map'],
//     xtype: 'SeaGrantMap',
 
//     config: {
//         title: 'PlaygroundMap',
//         layout: 'fit',
//         items: [
//             {
//                 xtype: 'map',
//                 mapOptions: {
//                     center: new google.maps.LatLng(44.638477,-124.060546),
//                     mapTypeId: google.maps.MapTypeId.ROADMAP,
//                     zoom: 15
//                 }
//             }
//         ]
//     },
 
//     initialize: function(){
//         this.callParent(arguments);
//         this.initMap();
//     },
 
//     initMap: function(){
 
//         var mapPanel = this.down('map');
//         // var pnt = new google.maps.LatLng(44.638477,-124.060546);
//         // setTimeout(mapPanel.setMapCenter(pnt), 100);
//         var map = mapPanel.getMap();

       
//         // var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
//         // panoramioLayer.setMap(map);
        
//         var marker = new google.maps.Marker({
//             map: map,
//             animation: google.maps.Animation.DROP,
//             position: new google.maps.LatLng(44.638477,-124.060546)
//         });
 
//     }
    
// });

Ext.define('SeaGrant_Proto.view.Map', {
    extend: 'Ext.Map',
    xtype: 'SeaGrantMap',
    // monitorResize: true,
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    center: new google.maps.LatLng(44.634115, -124.062796),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 17
                },
                listeners: {
                    delay: 500,
                    maprender: function(extMapComponent, googleMapComp){
                        var marker = new google.maps.Marker({
                            map: this.getMap(),
                            animation: google.maps.Animation.DROP,
                            position: new google.maps.LatLng(44.634115, -124.062796)
                        });
                    }
                }
            }
        ]
    },
    initialize: function(){
        var gMap = this.getMap();

        // var marker = new google.maps.Marker({
        //     map: gMap,
        //     animation: google.maps.Animation.DROP,
        //     position: new google.maps.LatLng(44.634115, -124.062796)
        // });
    }
    // onResize: function(w, h){
    //     Ext.Map.superclass.onResize.apply(this, arguments);
    //     if(this.map){
    //         google.maps.event.trigger(this.map, 'resize');
    //     }
    // }
});