//Follow this website for tutorial: https://openlayers.org/en/latest/doc/quickstart.html
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




//var txStateWebMercator1 = ol.proj.fromLonLat(tmh);
var txStateWebMercator = ol.proj.fromLonLat(txState);
var alkMercator = ol.proj.fromLonLat(alk);
var tmhMercator = ol.proj.fromLonLat(tmh);
var fhMercator = ol.proj.fromLonLat(fh);
var acaServiceMercator = ol.proj.fromLonLat(acaService);
var acadStGarMercator = ol.proj.fromLonLat(acadStGar);
var agBuildingMercator = ol.proj.fromLonLat(agBuilding);
var angelHallMercator = ol.proj.fromLonLat(angelHall);
var aquSpMercator = ol.proj.fromLonLat(aquSpCent);
var arnHallMercator = ol.proj.fromLonLat(arnHall);
var bareHallMercator = ol.proj.fromLonLat(bareHall);
var bexHallMercator = ol.proj.fromLonLat(bexHall);
var bobStadMercator = ol.proj.fromLonLat(bobStad);
var ballParkMercator = ol.proj.fromLonLat(ballPark);
var bobStandEndMercator = ol.proj.fromLonLat(bobStadEnd);
var bobVillMercator = ol.proj.fromLonLat(bobVill);
var brazonMercator = ol.proj.fromLonLat(brazon);
var brogHallMercator = ol.proj.fromLonLat(brogHall);
var butlHallMercator = ol.proj.fromLonLat(butlHall);
var centHallMercator = ol.proj.fromLonLat(centHall);
var centerStudRetMercator = ol.proj.fromLonLat(centerStuRet);
var chautHallMercator = ol.proj.fromLonLat(chautHall);
var chemMercator = ol.proj.fromLonLat(chem);
var blanHallMercator = ol.proj.fromLonLat(blanHall);
var blancoParkMercator = ol.proj.fromLonLat(blancoPark);



function changeToWebMercator(coord) {
  ol.proj.fromLonLat(coord)
}

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
  map.setView(new ol.View({
            center: alkMercator,
            zoom: 19
     }));

};
//function to control Alkek
function panTmh(){
  map.setView(new ol.View({
            center: tmhMercator,
            zoom: 19
     }));
};    

//function to control Academic Service
     function panAcaServ(){
  map.setView(new ol.View({
            center: acaService,
            zoom: 19
     }));
};

//function to control Academic services building
     function panAcad(){
  map.setView(new ol.View({
            center: acaServiceMercator,
            zoom: 19
     }));
};

//function to control Academy street garage
     function panAcadGar(){
  map.setView(new ol.View({
            center: acadStGarMercator,
            zoom: 19
     }));
};

//function to control Agriculture
     function panAg(){
  map.setView(new ol.View({
            center: agBuildingMercator,
            zoom: 19
     }));
};

//function to control Angelina
     function panAngel(){
  map.setView(new ol.View({
            center: angelHallMercator,
            zoom: 19
     }));
};

//function to control Aqua sports center
     function panAqua(){
  map.setView(new ol.View({
            center: aquSpMercator,
            zoom: 19
     }));
};



//function to control Aqua sports center
     function panAquSpCen(){
  map.setView(new ol.View({
            center: aquSpMercator,
            zoom: 19
     }));
};

//function to control Arnold Hall
     function panArnHall(){
  map.setView(new ol.View({
            center: arnHallMercator,
            zoom: 19
     }));
};

//function to control Bexar hall
     function panBexH(){
  map.setView(new ol.View({
            center: bexHallMercator,
            zoom: 19
     }));
};

//function to control baretta hall
     function panBare(){
  map.setView(new ol.View({
            center: bareHallMercator,
            zoom: 19
     }));
};
//function to control blanco hall
     function panBlan(){
  map.setView(new ol.View({
            center: blanHallMercator,
            zoom: 19
     }));
};
//function to control blanco parking
     function panblanPark(){
  map.setView(new ol.View({
            center: blancoParkMercator,
            zoom: 19
     }));
};
// function to control ball park
      function panballPark(){
  map.setView(new ol.View({
            center: ballParkMercator,
            zoom: 19
     }));
};

//---------------

// function to control ball park
      function panbobStand(){
  map.setView(new ol.View({
            center: bobStadMercator,
            zoom: 19
     }));
};

      function panbobStandEnd(){
  map.setView(new ol.View({
            center: bobStandEndMercator,
            zoom: 19
     }));
};

      function panbobVill(){
  map.setView(new ol.View({
            center: bobVillMercator,
            zoom: 19
     }));
};

      function panbrazon(){
  map.setView(new ol.View({
            center: brazonMercator,
            zoom: 19
     }));
};


      function panbutlHall(){
  map.setView(new ol.View({
            center: butlHallMercator,
            zoom: 19
     }));
};

      function pancentHall(){
  map.setView(new ol.View({
            center: centHallMercator,
            zoom: 19
     }));
};

      function pancenterStuRet(){
  map.setView(new ol.View({
            center: centerStudRetMercator,
            zoom: 19
     }));
};

      function panchautHall(){
  map.setView(new ol.View({
            center: chautHallMercator,
            zoom: 19
     }));
};

      function panchem(){
  map.setView(new ol.View({
            center: chemMercator,
            zoom: 19
     }));
};


/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/