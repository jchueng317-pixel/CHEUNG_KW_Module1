var wms_layers = [];
// Web-friendly historical raster overlays
var lyr_map_1967 = new ol.layer.Image({title: '1967 Historical Map', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/map_1967.png', imageExtent: [12681646.260,2546316.556,12682970.194,2547296.644], projection: 'EPSG:3857'})});
var lyr_map_1972 = new ol.layer.Image({title: '1972 Historical Map', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/map_1972.png', imageExtent: [12682846.230,2546313.151,12684145.418,2547305.809], projection: 'EPSG:3857'})});
var lyr_map_1978_sep = new ol.layer.Image({title: '1978 Sep Historical Map', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/map_1978_sep.png', imageExtent: [12682840.640,2545462.979,12684147.802,2546443.087], projection: 'EPSG:3857'})});
var lyr_map_1978_dec = new ol.layer.Image({title: '1978 Dec Historical Map', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/map_1978_dec.png', imageExtent: [12681666.967,2545453.946,12682958.791,2546446.999], projection: 'EPSG:3857'})});
var lyr_aerial_1982_w = new ol.layer.Image({title: '1982 Aerial — West', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/aerial_1982_w.png', imageExtent: [12679032.968,2544407.221,12683089.331,2547673.570], projection: 'EPSG:3857'})});
var lyr_aerial_1982_e = new ol.layer.Image({title: '1982 Aerial — East', opacity: 0.65, visible: false, source: new ol.source.ImageStatic({url: './overlays/aerial_1982_e.png', imageExtent: [12683084.124,2544414.252,12687139.720,2547679.630], projection: 'EPSG:3857'})});



        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_B04_metadata_QGIS_final_20261102_1 = new ol.format.GeoJSON();
var features_B04_metadata_QGIS_final_20261102_1 = format_B04_metadata_QGIS_final_20261102_1.readFeatures(json_B04_metadata_QGIS_final_20261102_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B04_metadata_QGIS_final_20261102_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B04_metadata_QGIS_final_20261102_1.addFeatures(features_B04_metadata_QGIS_final_20261102_1);
var lyr_B04_metadata_QGIS_final_20261102_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B04_metadata_QGIS_final_20261102_1, 
                style: style_B04_metadata_QGIS_final_20261102_1,
                popuplayertitle: 'B04_metadata_QGIS_final_2026-11-02',
                interactive: true,
                title: '<img src="styles/legend/B04_metadata_QGIS_final_20261102_1.png" /> B04_metadata_QGIS_final_2026-11-02'
            });
var format_B04_projectB04_mapped_photos_2 = new ol.format.GeoJSON();
var features_B04_projectB04_mapped_photos_2 = format_B04_projectB04_mapped_photos_2.readFeatures(json_B04_projectB04_mapped_photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B04_projectB04_mapped_photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B04_projectB04_mapped_photos_2.addFeatures(features_B04_projectB04_mapped_photos_2);
cluster_B04_projectB04_mapped_photos_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_B04_projectB04_mapped_photos_2
});
var lyr_B04_projectB04_mapped_photos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_B04_projectB04_mapped_photos_2, 
                style: style_B04_projectB04_mapped_photos_2,
                popuplayertitle: 'B04_project — B04_mapped_photos',
                interactive: true,
                title: '<img src="styles/legend/B04_projectB04_mapped_photos_2.png" /> B04_project — B04_mapped_photos'
            });
var format_historical_coastline_3 = new ol.format.GeoJSON();
var features_historical_coastline_3 = format_historical_coastline_3.readFeatures(json_historical_coastline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historical_coastline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historical_coastline_3.addFeatures(features_historical_coastline_3);
var lyr_historical_coastline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historical_coastline_3, 
                style: style_historical_coastline_3,
                popuplayertitle: 'historical_coastline',
                interactive: true,
                title: '<img src="styles/legend/historical_coastline_3.png" /> historical_coastline'
            });
var format_historical_sites_4 = new ol.format.GeoJSON();
var features_historical_sites_4 = format_historical_sites_4.readFeatures(json_historical_sites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historical_sites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historical_sites_4.addFeatures(features_historical_sites_4);
var lyr_historical_sites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historical_sites_4, 
                style: style_historical_sites_4,
                popuplayertitle: 'historical_sites',
                interactive: true,
                title: '<img src="styles/legend/historical_sites_4.png" /> historical_sites'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_B04_metadata_QGIS_final_20261102_1.setVisible(false);lyr_B04_projectB04_mapped_photos_2.setVisible(true);lyr_historical_coastline_3.setVisible(true);lyr_historical_sites_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_map_1967,lyr_map_1972,lyr_map_1978_sep,lyr_map_1978_dec,lyr_aerial_1982_w,lyr_aerial_1982_e,lyr_B04_projectB04_mapped_photos_2,lyr_historical_coastline_3,lyr_historical_sites_4];
lyr_B04_metadata_QGIS_final_20261102_1.set('fieldAliases', {'照片編號': '照片編號', '原始JPG': '原始JPG', '原始TIFF': '原始TIFF', '拍攝年份': '拍攝年份', '拍攝者': '拍攝者', '經手人': '經手人', '整理日期': '整理日期', '照片來源': '照片來源', 'place_name': 'place_name', '主題／內容': '主題／內容', 'mapping_status': 'mapping_status', 'WGS84_緯度': 'WGS84_緯度', 'WGS84_經度': 'WGS84_經度', 'cluster_key': 'cluster_key', 'remarks': 'remarks', '座標來源資料': '座標來源資料', '座標來源網址': '座標來源網址', });
lyr_B04_projectB04_mapped_photos_2.set('fieldAliases', {'fid': 'fid', '照片編號': '照片編號', '原始JPG': '原始JPG', '原始TIFF': '原始TIFF', '拍攝年份': '拍攝年份', '拍攝者': '拍攝者', '經手人': '經手人', '整理日期': '整理日期', '照片來源': '照片來源', 'place_name': '地點', '主題／內容': '主題 / 內容', 'mapping_status': 'mapping_status', 'WGS84_緯度': 'WGS84_緯度', 'WGS84_經度': 'WGS84_經度', 'cluster_key': 'cluster_key', 'remarks': '定位備註', '座標來源資料': '座標來源資料', '座標來源網址': '座標來源網址', });
lyr_historical_coastline_3.set('fieldAliases', {'fid': 'fid', 'year': 'year', 'source': 'source', 'feature_type': 'feature_type', 'confidence': 'confidence', 'remarks': 'remarks', });
lyr_historical_sites_4.set('fieldAliases', {'fid': 'fid', 'site_name': 'site_name', 'site_type': 'site_type', 'year': 'year', 'source': 'source', 'confidence': 'confidence', 'remarks': 'remarks', });
lyr_B04_metadata_QGIS_final_20261102_1.set('fieldImages', {'照片編號': '', '原始JPG': '', '原始TIFF': '', '拍攝年份': '', '拍攝者': '', '經手人': '', '整理日期': '', '照片來源': '', 'place_name': '', '主題／內容': '', 'mapping_status': '', 'WGS84_緯度': '', 'WGS84_經度': '', 'cluster_key': '', 'remarks': '', '座標來源資料': '', '座標來源網址': '', });
lyr_B04_projectB04_mapped_photos_2.set('fieldImages', {'fid': 'TextEdit', '照片編號': 'TextEdit', '原始JPG': 'ExternalResource', '原始TIFF': 'TextEdit', '拍攝年份': 'Range', '拍攝者': 'TextEdit', '經手人': 'TextEdit', '整理日期': 'DateTime', '照片來源': 'TextEdit', 'place_name': 'TextEdit', '主題／內容': 'TextEdit', 'mapping_status': 'TextEdit', 'WGS84_緯度': 'TextEdit', 'WGS84_經度': 'TextEdit', 'cluster_key': 'TextEdit', 'remarks': 'TextEdit', '座標來源資料': 'TextEdit', '座標來源網址': 'TextEdit', });
lyr_historical_coastline_3.set('fieldImages', {'fid': '', 'year': '', 'source': '', 'feature_type': '', 'confidence': '', 'remarks': '', });
lyr_historical_sites_4.set('fieldImages', {'fid': '', 'site_name': '', 'site_type': '', 'year': '', 'source': '', 'confidence': '', 'remarks': '', });
lyr_B04_metadata_QGIS_final_20261102_1.set('fieldLabels', {'照片編號': 'no label', '原始JPG': 'no label', '原始TIFF': 'no label', '拍攝年份': 'no label', '拍攝者': 'no label', '經手人': 'no label', '整理日期': 'no label', '照片來源': 'no label', 'place_name': 'no label', '主題／內容': 'no label', 'mapping_status': 'no label', 'WGS84_緯度': 'no label', 'WGS84_經度': 'no label', 'cluster_key': 'no label', 'remarks': 'no label', '座標來源資料': 'no label', '座標來源網址': 'no label', });
lyr_B04_projectB04_mapped_photos_2.set('fieldLabels', {'fid': 'hidden field', '照片編號': 'header label - visible with data', '原始JPG': 'no label', '原始TIFF': 'hidden field', '拍攝年份': 'inline label - visible with data', '拍攝者': 'inline label - visible with data', '經手人': 'hidden field', '整理日期': 'hidden field', '照片來源': 'inline label - visible with data', 'place_name': 'inline label - visible with data', '主題／內容': 'inline label - visible with data', 'mapping_status': 'hidden field', 'WGS84_緯度': 'hidden field', 'WGS84_經度': 'hidden field', 'cluster_key': 'hidden field', 'remarks': 'inline label - visible with data', '座標來源資料': 'hidden field', '座標來源網址': 'hidden field', });
lyr_historical_coastline_3.set('fieldLabels', {'fid': 'no label', 'year': 'no label', 'source': 'no label', 'feature_type': 'no label', 'confidence': 'no label', 'remarks': 'no label', });
lyr_historical_sites_4.set('fieldLabels', {'fid': 'no label', 'site_name': 'header label - visible with data', 'site_type': 'no label', 'year': 'no label', 'source': 'no label', 'confidence': 'no label', 'remarks': 'no label', });
lyr_historical_sites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});