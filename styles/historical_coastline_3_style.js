var size = 0;
var placement = 'point';
var style_historical_coastline_3 = function(feature, resolution){
    var year = String(feature.get('year') || '');
    var is1982 = year === '1982';
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: is1982 ? 'rgba(0,92,153,0.95)' : 'rgba(204,85,0,0.95)',
            lineDash: is1982 ? [10,7] : null,
            lineCap: 'round', lineJoin: 'round', width: 4
        })
    })];
};
