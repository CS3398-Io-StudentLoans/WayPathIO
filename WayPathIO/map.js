//Follow this website for tutorial: https://openlayers.org/en/latest/doc/quickstart.html
var txState = [-97.942999, 29.888998];
var tmh = [-97.941480, 29.889306];
var fh = [ -97.940402, 29.888836];
var alk = [-97.943114, 29.888868];

//var txStateWebMercator1 = ol.proj.fromLonLat(tmh);

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
        zoom: 16
        }),
    
      });

//function to control Alkek
function panAlk(){
var txStateWebMercator1 = ol.proj.fromLonLat(alk);
        var map = new ol.Map({
    
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],

        view: new ol.View({
        center: txStateWebMercator1,
        zoom: 17
        })
      });

};


/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/