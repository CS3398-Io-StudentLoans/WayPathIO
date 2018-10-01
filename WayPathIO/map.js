//Follow this website for tutorial: https://openlayers.org/en/latest/doc/quickstart.html

var txState = [-97.942999, 29.888998];
var txStateWebMercator = ol.proj.fromLonLat(txState);

var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        
        view: new ol.View({
        center: txStateWebMercator,
        zoom: 15
        })
      });

/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/