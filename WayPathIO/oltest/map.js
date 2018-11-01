import 'ol/ol.css';
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';

var txState = [-97.942999, 29.888998];
var alk = [-97.943114, 29.888868];
var txStateWebMercator = fromLonLat(txState);
var alkMercator = fromLonLat(alk);

function changeToWebMercator(coord) {
  fromLonLat(coord)
}

var view = new View({
  center: txStateWebMercator,
  zoom: 16
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  controls: defaultControls({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: view
});

var geolocation = new Geolocation({
  // enableHighAccuracy must be set to true to have the heading value.
  trackingOptions: {
    enableHighAccuracy: true
  },
  projection: view.getProjection()
});

function el(id) {
  return document.getElementById(id);
}

el('track').addEventListener('change', function() {
  geolocation.setTracking(this.checked);
});

// update the HTML page when the position changes.
geolocation.on('change', function() {
  el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
  el('location').innerText = geolocation.getPosition();
});

// handle geolocation error.
geolocation.on('error', function(error) {
  var info = document.getElementById('info');
  info.innerHTML = error.message;
  info.style.display = '';
});

var accuracyFeature = new Feature();
geolocation.on('change:accuracyGeometry', function() {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

var positionFeature = new Feature();
positionFeature.setStyle(new Style({
  image: new CircleStyle({
    radius: 6,
    fill: new Fill({
      color: '#3399CC'
    }),
    stroke: new Stroke({
      color: '#fff',
      width: 2
    })
  })
}));

geolocation.on('change:position', function() {
  var coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ?
    new Point(coordinates) : null);
});

new VectorLayer({
  map: map,
  source: new VectorSource({
    features: [accuracyFeature, positionFeature]
  })
});

function panAlk(){
  map.setView(new View({
            center: alkMercator,
            zoom: 19
     }));

};