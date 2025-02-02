ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.336336, 24.744624, 89.061123, 31.940967]);
var wms_layers = [];

var format_npl_admbnda_adm1_nd_20240314_0 = new ol.format.GeoJSON();
var features_npl_admbnda_adm1_nd_20240314_0 = format_npl_admbnda_adm1_nd_20240314_0.readFeatures(json_npl_admbnda_adm1_nd_20240314_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_npl_admbnda_adm1_nd_20240314_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_npl_admbnda_adm1_nd_20240314_0.addFeatures(features_npl_admbnda_adm1_nd_20240314_0);
var lyr_npl_admbnda_adm1_nd_20240314_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_npl_admbnda_adm1_nd_20240314_0, 
                style: style_npl_admbnda_adm1_nd_20240314_0,
                popuplayertitle: 'npl_admbnda_adm1_nd_20240314',
                interactive: false,
    title: 'npl_admbnda_adm1_nd_20240314<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_0.png" /> <br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_1.png" /> Bagmati<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_2.png" /> Gandaki<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_3.png" /> Karnali<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_4.png" /> Koshi<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_5.png" /> Lumbini<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_6.png" /> Madhesh<br />\
    <img src="styles/legend/npl_admbnda_adm1_nd_20240314_0_7.png" /> Sudur Paschim<br />'
        });
var format_hydro_geo_corrected_1 = new ol.format.GeoJSON();
var features_hydro_geo_corrected_1 = format_hydro_geo_corrected_1.readFeatures(json_hydro_geo_corrected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_hydro_geo_corrected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hydro_geo_corrected_1.addFeatures(features_hydro_geo_corrected_1);
var lyr_hydro_geo_corrected_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hydro_geo_corrected_1, 
                style: style_hydro_geo_corrected_1,
                popuplayertitle: 'hydro_geo_corrected',
                interactive: true,
                title: 'hydro_geo_corrected'
            });

lyr_npl_admbnda_adm1_nd_20240314_0.setVisible(true);lyr_hydro_geo_corrected_1.setVisible(true);
var layersList = [lyr_npl_admbnda_adm1_nd_20240314_0,lyr_hydro_geo_corrected_1];
lyr_npl_admbnda_adm1_nd_20240314_0.set('fieldAliases', {'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_hydro_geo_corrected_1.set('fieldAliases', {'S No': 'S No', 'Project': 'Project', 'Capacity (MW)': 'Capacity (MW)', 'River': 'River', 'Lic No': 'Lic No', 'Isuue Date': 'Isuue Date', 'Validity': 'Validity', 'Promoter': 'Promoter', 'Address': 'Address', 'Latitiude N': 'Latitiude N', 'Longitude E': 'Longitude E', 'VDC/District': 'VDC/District', 'C O D': 'C O D', });
lyr_npl_admbnda_adm1_nd_20240314_0.set('fieldImages', {'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', 'Shape_Leng': '', 'Shape_Area': '', 'AREA_SQKM': '', });
lyr_hydro_geo_corrected_1.set('fieldImages', {'S No': 'Hidden', 'Project': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'River': 'TextEdit', 'Lic No': 'TextEdit', 'Isuue Date': 'Hidden', 'Validity': 'Hidden', 'Promoter': 'TextEdit', 'Address': 'Hidden', 'Latitiude N': 'Hidden', 'Longitude E': 'Hidden', 'VDC/District': 'Hidden', 'C O D': 'TextEdit', });
lyr_npl_admbnda_adm1_nd_20240314_0.set('fieldLabels', {'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_hydro_geo_corrected_1.set('fieldLabels', {'Project': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'River': 'inline label - visible with data', 'Lic No': 'inline label - visible with data', 'Promoter': 'inline label - visible with data', 'C O D': 'inline label - visible with data', });
lyr_hydro_geo_corrected_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});