var map = L.map('map', {center: [26, 15],zoom: 2, crs: L.CRS.EPSG3857});
var dummyLayer = L.tileLayer('');
var layerHIKE = L.tileLayer.wms('https://data.geus.dk/egdi/wfs/?', {minZoom: 2, layers: 'hike_overview_layer', 'transparent': 'true', 'opacity': '1', 'format': 'image/png', attribution: 'Faults hosted by the HIKE European Fault Database (EFDB), compiled in the framework of <a href="https://geoera.eu/">the GeoERA project</a>.'});
var layerBROCPT = L.tileLayer.wms('https://service.pdok.nl/bzk/brocptkenset/wms/v1_0?', {minZoom: 2, layers: 'cpt_kenset', 'transparent': 'true', 'opacity': '1', 'format': 'image/png'});
var layerCM = L.tileLayer.wms('https://drive.emodnet-geology.eu/geoserver/tno/wms?', {minZoom: 2, layers: 'tno:coastal_migration_satellite', 'transparent': 'true', 'opacity': '1', 'format': 'image/png', attribution: 'Coastal migration map hosted by <a href="https://www.emodnet-geology.eu/">EMODnet Geology</a>.'});
var layerOneGeology = L.tileLayer.wms('http://mapsref.brgm.fr/wxs/1GG/GISEurope_Bedrock_and_Structural_Geology?', {minZoom: 2, layers: 'ONEGEOLOGY', 'transparent': 'true', 'opacity': '1', 'format': 'image/png', attribution: 'Structural Geology map by <a href="https://onegeology.org/">OneGeology Europe</a>.'});
var layerCountriesVisited = L.geoJSON(CountriesVisitedJSON, {color: "#000000", fillColor: "#cb0800", weight: 0.01, fillOpacity: 0.5, onEachFeature: onEachFeature});
					
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

//L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {minZoom: 2, maxZoom: 16, attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'}).addTo(map);
					
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {minZoom: 2, maxZoom: 18, attribution: 'Map tiles by <a href="http://www.esri.com/">Esri</a>. Data by i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and GIS Community'}).addTo(map);

layerCountriesVisited.onEachFeature = 
map.addLayer(layerCountriesVisited);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.Name) {
        layer.bindPopup("<p class=center>" + feature.properties.Name + "</p><img src=Pictures/"+ feature.properties.Photo + " width=250 height=250><p class=center><a href=" + feature.properties.Link + ">" + feature.properties.Link + "</a></p>");
    }
}

function addLayer(layer, lat, long, zoom, popupLat, popupLong, popupText) {
	map.eachLayer(function (layer) {
    		if ('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' != layer._url){map.removeLayer(layer)};
	});
	map.flyTo([lat, long], zoom)
	map.addLayer(layer);
	layer.bindPopup('<div>'+popupText+'</div>');
	var popUp = layer._popup;
	popUp.setLatLng([popupLat, popupLong]);
	popUp.addTo(map);
}
					
//L.imageOverlay('PortfolioPictures/GeoERAHIKE.png', [[0, 0], [2, 2]]).addTo(map);



