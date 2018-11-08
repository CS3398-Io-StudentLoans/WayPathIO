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
import GeoJSON from 'ol/format/GeoJSON';

//navigation imports
import Polyline from 'ol/format/Polyline';

//geoJSON imports
import Overlay from 'ol/Overlay';

var txState = [-97.942999, 29.888998];
var alk = [-97.943114, 29.888868];
var txStateWebMercator = fromLonLat(txState);
var alkMercator = fromLonLat(alk);

function changeToWebMercator(coord) {
  fromLonLat(coord)
}

//*****************
//*****************
//Navigation variables:
//*****************
//*****************
var points = [],
    msg_el = document.getElementById('msg'),
    url_osrm_nearest = '//router.project-osrm.org/nearest/v1/foot/',
    url_osrm_route = '//router.project-osrm.org/route/v1/foot/',
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

//*****************
//*****************
//Building Layer Variables
//*****************
//*****************
/**const buildingLayer = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'buildings.geojson'
      })
});

const overlay = new Overlay({
  element: document.getElementById('popup-container'),
  positioning: 'bottom-center',
  offset: [0, -10],
  autoPan: true
});**/


//*****************
//*****************
//Create Map
//*****************
//*****************

const baseLayer = new TileLayer({
  source: new OSM()
})

var view = new View({
  center: txStateWebMercator,
  zoom: 16
});

const map = new Map({
  layers: [
    baseLayer,
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


//*****************
//*****************
//Geolocation variables
//*****************
//*****************

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

//*****************
//*****************
//Navigation below
//*****************
//*****************

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

//*****************
//*****************
//Pan to each building (currently doesn't work)
//*****************
//*****************
				function myFunction() {
				document.getElementById("myDropdown").classList.toggle("show");
				}
				
				function myDataFunction() {
				document.getElementById("myDataDropdown").classList.toggle("show");
				}
				
				function filterFunction() {
					var input, filter, ul, li, a, i;
					input = document.getElementById("myInput");
					filter = input.value.toUpperCase();
					div = document.getElementById("myDropdown");
					a = div.getElementsByTagName("a");
					for (i = 0; i < a.length; i++) {
						if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
							a[i].style.display = "";
						} else {
							a[i].style.display = "none";
						}
					}
				}
				
function panAlk(){
  map.setView(new View({
            center: alkMercator,
            zoom: 19
     }));

};