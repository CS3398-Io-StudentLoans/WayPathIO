//Follow this website for tutorial: https://openlayers.org/en/latest/doc/quickstart.html

var txState = [-97.942999, 29.888998];
var txStateWebMercator = ol.proj.fromLonLat(txState);

var map = new ol.Map({
    
    controls: ol.control.defaults().extend([
        new ol.control.ZoomToExtent({
            extent: [
                8179.7791264898, 5920020.284081122,
        848966.963801, 5936863.986909639
            ]
        })
    ]),
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],

        view: new ol.View({
        center: txStateWebMercator,
        zoom: 16
        })
      });


/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/