import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

//GPS imports
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js'
import {defaults as defaultControls} from 'ol/control.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

var txState = [-97.942999, 29.888998];
var tmh = [-97.941480, 29.889306];
var fh = [ -97.940402, 29.888836];
var alk = [-97.943114, 29.888868];
var acaService =  [ -97.939079, 29.888504];
var acadStGar =   [ -97.948008, 29.885892];
var agBuilding =  [ -97.938145, 29.890531 ];
var angelHall =   [ -97.953664, 29.889337 ];
var aquSpCent =   [ -97.937676, 29.890435 ];
var arnHall =     [ -97.943393, 29.890030 ];
var bexHall =     [ -97.948096, 29.886397 ];
var bareHall =    [ -97.940652, 29.888212 ];
var blanHall =    [ -97.951916, 29.887162 ];  
var blancoPark=   [ -97.953026, 29.887134 ];
var ballPark =    [ -97.928224, 29.887702 ];
var bobStad =     [ -97.925486, 29.890878 ];
var bobStadEnd =  [ -97.925368, 29.890168 ];
var bobVill =     [ -97.922293, 29.893113 ];
var brazon =      [ -97.939905, 29.887792 ];
var brogHall =    [ -97.939902, 29.887772 ];
var butlHall =    [ -97.938757, 29.887084 ];
var centHall =    [ -97.940008, 29.889653 ];
var centerStuRet =[ -97.940278, 29.885636 ];
var chautHall =   [ -97.946845, 29.890479 ];
var chem =        [ -97.939451, 29.889599 ];

var txStateWebMercator = fromLonLat(txState);
var alkMercator = fromLonLat(alk);
var tmhMercator = fromLonLat(tmh);
var fhMercator = fromLonLat(fh);
var acaServiceMercator = fromLonLat(acaService);
var acadStGarMercator = fromLonLat(acadStGar);
var agBuildingMercator = fromLonLat(agBuilding);
var angelHallMercator = fromLonLat(angelHall);
var aquSpMercator = fromLonLat(aquSpCent);
var arnHallMercator = fromLonLat(arnHall);
var bareHallMercator = fromLonLat(bareHall);
var bexHallMercator = fromLonLat(bexHall);
var bobStadMercator = fromLonLat(bobStad);
var ballParkMercator = fromLonLat(ballPark);
var bobStandEndMercator = fromLonLat(bobStadEnd);
var bobVillMercator = fromLonLat(bobVill);
var brazonMercator = fromLonLat(brazon);
var brogHallMercator = fromLonLat(brogHall);
var butlHallMercator = fromLonLat(butlHall);
var centHallMercator = fromLonLat(centHall);
var centerStudRetMercator = fromLonLat(centerStuRet);
var chautHallMercator = fromLonLat(chautHall);
var chemMercator = fromLonLat(chem);
var blanHallMercator = fromLonLat(blanHall);
var blancoParkMercator = fromLonLat(blancoPark);

function changeToWebMercator(coord) {
  fromLonLat(coord)
}

var map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],

  controls: defaultControls({
    attributionOptions: {
      collapsible: false
    }
  }),

  view: new View({
    center: txStateWebMercator,
    zoom: 16
  })

});

var geolocation = new Geolocation({
// enableHighAccuracy must be set to true to have the heading value.
  trackingOptions: {
    enableHighAccuracy: true
  },
  projection: view.getProjection()
});

el('track').addEventListener('change', function() {
  geolocation.setTracking(this.checked);
});

geolocation.on('change', function() {
  el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
  el('altitude').innerText = geolocation.getAltitude() + ' [m]';
  el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
  el('heading').innerText = geolocation.getHeading() + ' [rad]';
  el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
});

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
//function to control Alkek
function panTmh(){
  map.setView(new View({
    center: tmhMercator,
    zoom: 19
  }));
};    

//function to control Academic Service
function panAcaServ(){
  map.setView(new View({
    center: acaService,
    zoom: 19
  }));
};

//function to control Academic services building
function panAcad(){
  map.setView(new View({
    center: acaServiceMercator,
    zoom: 19
  }));
};

//function to control Academy street garage
function panAcadGar(){
  map.setView(new View({
            center: acadStGarMercator,
            zoom: 19
     }));
};

//function to control Agriculture
function panAg(){
  map.setView(new View({
            center: agBuildingMercator,
            zoom: 19
     }));
};

//function to control Angelina
function panAngel(){
  map.setView(new View({
            center: angelHallMercator,
            zoom: 19
     }));
};

//function to control Aqua sports center
function panAqua(){
  map.setView(new View({
            center: aquSpMercator,
            zoom: 19
     }));
};

//function to control Aqua sports center
function panAquSpCen(){
  map.setView(new View({
            center: aquSpMercator,
            zoom: 19
     }));
};

//function to control Arnold Hall
function panArnHall(){
  map.setView(new View({
            center: arnHallMercator,
            zoom: 19
     }));
};

//function to control Bexar hall
function panBexH(){
  map.setView(new View({
            center: bexHallMercator,
            zoom: 19
     }));
};

//function to control baretta hall
function panBare(){
  map.setView(new View({
            center: bareHallMercator,
            zoom: 19
     }));
};
//function to control blanco hall
function panBlan(){
  map.setView(new View({
            center: blanHallMercator,
            zoom: 19
     }));
};
//function to control blanco parking
function panblanPark(){
  map.setView(new View({
            center: blancoParkMercator,
            zoom: 19
     }));
};
// function to control ball park
function panballPark(){
  map.setView(new View({
            center: ballParkMercator,
            zoom: 19
     }));
};

// function to control ball park
function panbobStand(){
  map.setView(new View({
            center: bobStadMercator,
            zoom: 19
     }));
};

function panbobStandEnd(){
  map.setView(new View({
            center: bobStandEndMercator,
            zoom: 19
     }));
};

function panbobVill(){
  map.setView(new View({
            center: bobVillMercator,
            zoom: 19
     }));
};

function panbrazon(){
  map.setView(new View({
            center: brazonMercator,
            zoom: 19
     }));
};

function panbutlHall(){
  map.setView(new View({
            center: butlHallMercator,
            zoom: 19
     }));
};

function pancentHall(){
  map.setView(new View({
            center: centHallMercator,
            zoom: 19
     }));
};

function pancenterStuRet(){
  map.setView(new View({
            center: centerStudRetMercator,
            zoom: 19
     }));
};

function panchautHall(){
  map.setView(new View({
            center: chautHallMercator,
            zoom: 19
     }));
};

function panchem(){
  map.setView(new View({
            center: chemMercator,
            zoom: 19
     }));
};