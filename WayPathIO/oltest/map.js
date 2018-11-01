import 'ol/ol.css';
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Icon, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat, transform} from 'ol/proj';

//navigation imports
import Polyline from 'ol/format/Polyline';

var txState = [-97.942999, 29.888998];
var alk = [-97.943114, 29.888868];
var txStateWebMercator = fromLonLat(txState);
var alkMercator = fromLonLat(alk);

function changeToWebMercator(coord) {
  fromLonLat(coord)
}

var points = [],
    msg_el = document.getElementById('msg'),
    url_osrm_nearest = '//router.project-osrm.org/nearest/v1/driving/',
    url_osrm_route = '//router.project-osrm.org/route/v1/driving/',
    icon_url = '//cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png'

var vectorSource = new VectorSource()
var vectorLayer = new VectorLayer({
      source: vectorSource
    })

var styles = {
      route: new Style({
        stroke: new Stroke({
          width: 6, color: [40, 40, 40, 0.8]
        })
      }),
      
      icon: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: icon_url
        })
      })
    }

console.clear();

var view = new View({
  center: txStateWebMercator,
  zoom: 16
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer,
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

map.on('click', function(evt){
  utils.getNearest(evt.coordinate).then(function(coord_street){
    var last_point = points[points.length - 1];
    var points_length = points.push(coord_street);

    utils.createFeature(coord_street);

    if (points_length < 2) {
      msg_el.innerHTML = 'Click to add another point';
      return;
    }

    //get the route
    var point1 = last_point.join();
    var point2 = coord_street.join();
    
    fetch(url_osrm_route + point1 + ';' + point2).then(function(r) { 
      return r.json();
    }).then(function(json) {
      if(json.code !== 'Ok') {
        msg_el.innerHTML = 'No route found.';
        return;
      }
      msg_el.innerHTML = 'Route added';
      //points.length = 0;
      utils.createRoute(json.routes[0].geometry);
    });
  });
});

var utils = {
  getNearest: function(coord){
    var coord4326 = utils.to4326(coord);    
    return new Promise(function(resolve, reject) {
      //make sure the coord is on street
      fetch(url_osrm_nearest + coord4326.join()).then(function(response) { 
        // Convert to JSON
        return response.json();
      }).then(function(json) {
        if (json.code === 'Ok') resolve(json.waypoints[0].location);
        else reject();
      });
    });
  },

  createFeature: function(coord) {
    var feature = new Feature({
      type: 'place',
      geometry: new Point(fromLonLat(coord))
    });
    feature.setStyle(styles.icon);
    vectorSource.addFeature(feature);
  },
  createRoute: function(polyline) {
    // route is ol.geom.LineString
    var route = new Polyline({
      factor: 1e5
    }).readGeometry(polyline, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    });
    var feature = new Feature({
      type: 'route',
      geometry: route
    });
    feature.setStyle(styles.route);
    vectorSource.addFeature(feature);
  },
  to4326: function(coord) {
    return transform([
      parseFloat(coord[0]), parseFloat(coord[1])
    ], 'EPSG:3857', 'EPSG:4326');
  }
};