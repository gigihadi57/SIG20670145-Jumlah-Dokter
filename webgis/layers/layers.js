var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0 = new ol.format.GeoJSON();
var features_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0 = format_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.readFeatures(json_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.addFeatures(features_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0);var lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0, 
                style: style_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0,
    title: 'Pemetaan Jumlah Tenaga Kesehatan Kabupaten Pati 2021<br />\
    <img src="styles/legend/PemetaanJumlahTenagaKesehatanKabupatenPati2021_0_0.png" />  2.0000 - 3.6000 <br />\
    <img src="styles/legend/PemetaanJumlahTenagaKesehatanKabupatenPati2021_0_1.png" />  5.2000 - 6.8000 <br />\
    <img src="styles/legend/PemetaanJumlahTenagaKesehatanKabupatenPati2021_0_2.png" />  6.8000 - 8.4000 <br />\
    <img src="styles/legend/PemetaanJumlahTenagaKesehatanKabupatenPati2021_0_3.png" />  8.4000 - 10.0000 <br />'
        });

lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.setVisible(true);
var layersList = [baseLayer,lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0];
lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kecamatan': 'Kecamatan', '2021': '2021', '2022': '2022', '2023': '2023', });
lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kecamatan': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', '2023': 'TextEdit', });
lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.set('fieldLabels', {'OBJECTID': 'inline label', 'Kecamatan': 'inline label', '2021': 'inline label', '2022': 'inline label', '2023': 'inline label', });
lyr_PemetaanJumlahTenagaKesehatanKabupatenPati2021_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});