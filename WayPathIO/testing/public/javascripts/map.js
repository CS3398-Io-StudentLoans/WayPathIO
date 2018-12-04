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
var matth =       [ -97.943796, 29.890784 ];
var medina =      [ -97.939826, 29.890377 ]; 
var moell =       [ -97.948109, 29.884837 ];
var music =       [ -97.940843, 29.890909 ];
var nuec =        [ -97.941276, 29.888188 ];
var olMain =      [ -97.939102, 29.889381 ];
var outCent =     [ -97.933731, 29.887375 ];
var pecos =       [ -97.940164, 29.890964 ];
var peder =       [ -97.940119, 29.890731 ];
var perfArtsC =   [ -97.938820, 29.886109 ];
var phyPlant =    [ -97.938038, 29.891436 ];
var plStGar=      [ -97.940803, 29.890021 ];
var recycCent =   [ -97.948965, 29.884992 ];
var resGreenhouse = [ -97.946763, 29.886503 ];
var retamaHall =  [  -97.941242, 29.887851 ];
var racuac =      [ -97.942547, 29.886328 ];
var riverH =      [ -97.93625, 29.885801 ];
var royFMitte =   [ -97.947123, 29.888879 ];
var sabinal =     [ -97.939576, 29.891105 ];
var sanGabH =     [ -97.953858, 29.889750 ];
var sanJacH =     [ -97.943878, 29.886764 ];
var sanMarcH =    [ -97.943868,  29.886784 ];
var sayersH =     [ -97.951034, 29.886348 ];
var scieGreenh=   [ -97.946467, 29.887540 ];
var smithHall =   [ -97.942855, 29.890268 ];
var smithHouse =  [  -97.951299, 29.885474 ];
var speckStGar =  [ -97.952777, 29.890495 ];
var sprLakeH =    [ -97.930158, 29.894201 ];
var sterryH =     [ -97.939974, 29.886414 ];
var straColis =   [ -97.925840, 29.891505 ];
var darBCAdminCom=[ -97.931873, 29.889022 ];
var straH =       [ -97.949653, 29.885564 ];
var studHealth =  [ -97.946237, 29.890695 ];
var studRec =     [ -97.950640, 29.888897 ];
var swinnGueH =   [ -97.946126, 29.886439 ];
var swinnH =      [ -97.946126, 29.886439 ];
var tayMurph =    [ -97.941467, 29.889335 ];
var tennisCent =  [ -97.935858, 29.891030 ];
var tower =       [ -97.943124, 29.886984 ];
var towerGar =    [ -97.942642, 29.887021 ];
var theaterCent = [ -97.937383, 29.886958 ];
var thronInt =    [ -97.946489, 29.887052 ];
var trackFielFac= [ -97.922248, 29.891394 ];
var trinity =     [ -97.939773, 29.890966 ];
var undAcCent =   [ -97.942614, 29.888031 ];
var rotc =        [ -97.950180, 29.887425 ];
var woodsStGar =  [ -97.943903, 29.887520 ];
var brog =        [ -97.939912, 29.888306 ];
var childDev =    [ -97.949724, 29.887692 ];
var collegeInn =  [ -97.946416, 29.889273 ];
var collegeOfEdu =[ -97.938996, 29.888254 ];
var colorado =    [ -97.939155, 29.891149 ];
var comal =       [ -97.940735, 29.889386 ];
var comDinn =     [ -97.940289, 29.888215 ];
var derrick =     [ -97.942115, 29.889361 ];
var garyStGar =   [ -97.939390, 29.885879 ];
var elliott =     [ -97.944189, 29.888343 ];
var mcCoy =       [ -97.944597, 29.888059 ];
var encinoH =     [ -97.945921, 29.889108 ];
var evansLiber =  [ -97.941971, 29.888679 ];
var fallHall =    [ -97.951418, 29.886900 ];
var famConSci =   [ -97.949414, 29.888764 ];
var freemanAquBio=[ -97.935722, 29.889679 ];
var giallaHall =  [ -97.946651, 29.889979 ];
var harrisH =     [ -97.951144, 29.888111 ];
var hillHouse =   [ -97.937921, 29.889594 ];
var hinesAcCen =  [ -97.938422, 29.890178 ];
var iveyMoore =   [ -97.953556, 29.891450 ];
var jacksonH =    [ -97.944589, 29.889970 ];
var jcKellamAm =  [ -97.937526, 29.888792 ];
var jeromeCole =  [ -97.946573, 29.888027 ];
var joannCole =   [ -97.947827, 29.889423 ];
var jowers =      [ -97.932774, 29.887289 ];
var jones =       [ -97.942997, 29.887620 ];
var lampasas =    [ -97.939403, 29.889160 ];
var lantanaH =    [ -97.939732, 29.886961 ];
var laurelH =     [ -97.940577, 29.887710 ];
var lbjParking =  [ -97.945436, 29.889647 ];
var lbjStCent =   [ -97.944841, 29.889274 ];
var mathCS =      [ -97.942642, 29.889460 ];

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
var brogdonMercator = ol.proj.fromLonLat(brogdon);

var brogHallMercator = ol.proj.fromLonLat(brogHall);
var butlHallMercator = ol.proj.fromLonLat(butlHall);
var centHallMercator = ol.proj.fromLonLat(centHall);
var centerStudRetMercator = ol.proj.fromLonLat(centerStuRet);
var chautHallMercator = ol.proj.fromLonLat(chautHall);
var chemMercator = ol.proj.fromLonLat(chem);
var blanHallMercator = ol.proj.fromLonLat(blanHall);
var blancoParkMercator = ol.proj.fromLonLat(blancoPark);
var matthMercator = ol.proj.fromLonLat(matth);
var medinaMercator = ol.proj.fromLonLat(medina);
var moellMercator = ol.proj.fromLonLat(moell);
var musicMercator = ol.proj.fromLonLat(music);
var nuecMercator = ol.proj.fromLonLat(nuec);
var olMainMercator = ol.proj.fromLonLat(olMain);
var pecosMercator = ol.proj.fromLonLat(pecos);
var outCentMercator = ol.proj.fromLonLat(outCent);

var pecosMercator = ol.proj.fromLonLat(pecos);
var pederMercator = ol.proj.fromLonLat(peder);
var perfArtsCMercator = ol.proj.fromLonLat(perfArtsC);
var phyPlantMercator = ol.proj.fromLonLat(phyPlant);
var plStGarMercator = ol.proj.fromLonLat(plStGar);
var recycCentMercator = ol.proj.fromLonLat(recycCent);
var resGreenHouseMercator = ol.proj.fromLonLat(resGreenhouse);

var retamaHallMercator = ol.proj.fromLonLat(retamaHall);
var racuacMercator = ol.proj.fromLonLat(racuac);
var riverHMercator = ol.proj.fromLonLat(riverH);
var royFMitteMercator = ol.proj.fromLonLat(royFMitte);
var sabinalMercator = ol.proj.fromLonLat(sabinal);
var sanGabHMercator = ol.proj.fromLonLat(sanGabH);
var sanJacHMercator = ol.proj.fromLonLat(sanJacH);
var sanMarcHMercator = ol.proj.fromLonLat(sanMarcH);
var sayersHMercator = ol.proj.fromLonLat(sayersH);
var scieGreenHMercator = ol.proj.fromLonLat(scieGreenh);
var smithHallMercator = ol.proj.fromLonLat(smithHall);
var smithHouseMercator = ol.proj.fromLonLat(smithHouse);
var speckStGarMercator = ol.proj.fromLonLat(speckStGar);
var sprLakeHMercator = ol.proj.fromLonLat(sprLakeH);
var sterryHMercator = ol.proj.fromLonLat(sterryH);
var straColisMercator = ol.proj.fromLonLat(straColis);
var darBCAdminComMercator = ol.proj.fromLonLat(darBCAdminCom);
var studHealthMercator = ol.proj.fromLonLat(studHealth);
var swinnGueHMercator = ol.proj.fromLonLat(swinnGueH);
var swinnHMercator = ol.proj.fromLonLat(swinnH);
var tennisCentMercator = ol.proj.fromLonLat(tennisCent);
var towerMercator = ol.proj.fromLonLat(tower);
var towerGarMercator = ol.proj.fromLonLat(towerGar);
var theaterCentMercator = ol.proj.fromLonLat(theaterCent);
var trackFieldFacMercator = ol.proj.fromLonLat(trackFielFac);
var trinityMercator = ol.proj.fromLonLat(trinity);
var undAcCentMercator = ol.proj.fromLonLat(undAcCent);
var undAcCentMercator = ol.proj.fromLonLat(undAcCent);
var woodsStGarMercator = ol.proj.fromLonLat(woodsStGar);
var rotcMercator = ol.proj.fromLonLat(rotc);
var retamaHallMecator = ol.proj.fromLonLat(retamaHall);
var straHMecator = ol.proj.fromLonLat(straH);
var thronIntMecator = ol.proj.fromLonLat(thronInt);

var childDevMecator = ol.proj.fromLonLat(childDev);
var collegeInnMecator = ol.proj.fromLonLat(collegeInn);
var collegeOfEduMecator = ol.proj.fromLonLat(collegeOfEdu);
var coloradoMecator = ol.proj.fromLonLat(colorado);
var comalMecator = ol.proj.fromLonLat(comal);
var domDinnMecator = ol.proj.fromLonLat(comDinn);
var derrickMecator = ol.proj.fromLonLat(derrick);
var garyStGarMecator = ol.proj.fromLonLat(garyStGar);
var elliottMecator = ol.proj.fromLonLat(elliott);
var mcCoyMecator = ol.proj.fromLonLat(mcCoy);
var encinoHMecator = ol.proj.fromLonLat(encinoH);
var evansLiberMecator = ol.proj.fromLonLat(evansLiber);
var fallHallMecator = ol.proj.fromLonLat(fallHall);
var famConSciMecator = ol.proj.fromLonLat(famConSci);
var freemanAquBioMecator = ol.proj.fromLonLat(freemanAquBio);
var giallaHallMecator = ol.proj.fromLonLat(giallaHall);
var harrisHMecator = ol.proj.fromLonLat(harrisH);
var hillHouseMecator = ol.proj.fromLonLat(hillHouse);
var hinesAcCenMecator = ol.proj.fromLonLat(hinesAcCen);
var iveyMooreMecator = ol.proj.fromLonLat(iveyMoore);
var jacksonHMecator = ol.proj.fromLonLat(jacksonH);
var jcKellamAmMecator = ol.proj.fromLonLat(jcKellamAm);
var jeromeColeMecator = ol.proj.fromLonLat(jeromeCole);
var joannColeMecator = ol.proj.fromLonLat(joannCole)
var jCMitteMecator = ol.proj.fromLonLat(mitte);
var jonesMecator = ol.proj.fromLanLat(jones);
var jowersMecator = ol.proj.fromLonLat(jowers);
var lampasasMecator = ol.proj.fromLonLat(lampasas);
var lantanaHMecator = ol.proj.fromLonLat(lantanaH);
var laurelHMecator = ol.proj.fromLonLat(laurelH);
var lbjParkingMecator = ol.proj.fromLonLat(lbjParking);
var lbjStCentMecator = ol.proj.fromLonLat(lbjStCent);
var mathCSMecator = ol.proj.fromLonLat(mathCS);

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

      function panbrog(){
  map.setView(new ol.View({
            center: brogdonMercator,
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


//----------------------------------------------------
      function panmatth(){
  map.setView(new ol.View({
            center: matthMercator,
            zoom: 19
     }));
};

      function panmedina(){
  map.setView(new ol.View({
            center: medinaMercator,
            zoom: 19
     }));
};

      function panmoell(){
  map.setView(new ol.View({
            center: moellMercator,
            zoom: 19
     }));
};

      function panmusic(){
  map.setView(new ol.View({
            center: musicMercator,
            zoom: 19
     }));
};

      function pannuece(){
  map.setView(new ol.View({
            center: nuecMercator,
            zoom: 19
     }));
};

      function panolMain(){
  map.setView(new ol.View({
            center: olMainMercator,
            zoom: 19
     }));
};

      function panoutCent(){
  map.setView(new ol.View({
            center: outCentMercator,
            zoom: 19
     }));
};


      function panpecos(){
  map.setView(new ol.View({
            center: pecosMercator,
            zoom: 19
     }));
};

      function panpeder(){
  map.setView(new ol.View({
            center: pederMercator,
            zoom: 19
     }));
};

      function panperfArtsC(){
  map.setView(new ol.View({
            center: perfArtsCMercator,
            zoom: 19
     }));
};

      function panphyPlant(){
  map.setView(new ol.View({
            center: phyPlantMercator,
            zoom: 19
     }));
};

      function panplStGar(){
  map.setView(new ol.View({
            center: plStGarMercator,
            zoom: 19
     }));
};

      function panrecycCent(){
  map.setView(new ol.View({
            center: recycCentMercator,
            zoom: 19
     }));
};

      function panresGreenhouse(){
  map.setView(new ol.View({
            center: resGreenHouseMercator,
            zoom: 19
     }));
};

      function panretamaHall(){
  map.setView(new ol.View({
            center: retamaHallMercator,
            zoom: 19
     }));
};

      function panracuac(){
  map.setView(new ol.View({
            center: racuacMercator,
            zoom: 19
     }));
};

      function panriverH(){
  map.setView(new ol.View({
            center: riverHMercator,
            zoom: 19
     }));
};

      function panroyFMitte(){
  map.setView(new ol.View({
            center: royFMitteMercator,
            zoom: 19
     }));
};

      function pansabinal(){
  map.setView(new ol.View({
            center: sabinalMercator,
            zoom: 19
     }));
};

      function pansanGabH(){
  map.setView(new ol.View({
            center: sanGabHMercator,
            zoom: 19
     }));
};
      function pansanJacH(){
  map.setView(new ol.View({
            center: sanJacHMercator,
            zoom: 19
     }));
};
      function pansanMarcH(){
  map.setView(new ol.View({
            center: sanMarcHMercator,
            zoom: 19
     }));
};

      function pansayersH(){
  map.setView(new ol.View({
            center: sayersHMercator,
            zoom: 19
     }));
};

      function panscieGreenH(){
  map.setView(new ol.View({
            center: scieGreenHMercator,
            zoom: 19
     }));
};

      function pansmithHall(){
  map.setView(new ol.View({
            center: smithHallMercator,
            zoom: 19
     }));
};

      function pansmithHouse(){
  map.setView(new ol.View({
            center: smithHouseMercator,
            zoom: 19
     }));
};

      function panspeckStGar(){
  map.setView(new ol.View({
            center: speckStGarMercator,
            zoom: 19
     }));
};

      function pansprLakeH(){
  map.setView(new ol.View({
            center: sprLakeHMercator,
            zoom: 19
     }));
};

      function pansterryH(){
  map.setView(new ol.View({
            center: sterryHMercator,
            zoom: 19
     }));
};

      function panstraColis(){
  map.setView(new ol.View({
            center: straColisMercator,
            zoom: 19
     }));
};

      function pandarBCAdminCom(){
  map.setView(new ol.View({
            center: darBCAdminComMercator,
            zoom: 19
     }));
};

      function panstudHealth(){
  map.setView(new ol.View({
            center: studHealthMercator,
            zoom: 19
     }));
};

      function panswinnGueH(){
  map.setView(new ol.View({
            center: swinnGueHMercator,
            zoom: 19
     }));
};

      function panswinnH(){
  map.setView(new ol.View({
            center: swinnHMercator,
            zoom: 19
     }));
};

      function pantennisCent(){
  map.setView(new ol.View({
            center: tennisCentMercator,
            zoom: 19
     }));
};

      function pantower(){
  map.setView(new ol.View({
            center: towerMercator,
            zoom: 19
     }));
};

      function pantheaterCent(){
  map.setView(new ol.View({
            center: theaterCentMercator,
            zoom: 19
     }));
};

      function pantrackFieldFac(){
  map.setView(new ol.View({
            center: trackFieldFacMercator,
            zoom: 19
     }));
};

      function pantrinity(){
  map.setView(new ol.View({
            center: trinityMercator,
            zoom: 19
     }));
};

      function panunderAcCent(){
  map.setView(new ol.View({
            center: undAcCentMercator,
            zoom: 19
     }));
};

      function panrotc(){
  map.setView(new ol.View({
            center: rotcMercator,
            zoom: 19
     }));
};


      function panwoodsStGar(){
  map.setView(new ol.View({
            center: woodsStGarMercator,
            zoom: 19
     }));
};

      function pantowerGar(){
  map.setView(new ol.View({
            center: towerGarMercato,
            zoom: 19
     }));
};

      function panrotc(){
  map.setView(new ol.View({
            center: rotcMercator,
            zoom: 19
     }));
};

      function panretamaHall(){
  map.setView(new ol.View({
            center: retamaHallMecator,
            zoom: 19
     }));
};

      function panstraH(){
  map.setView(new ol.View({
            center: straHMecator,
            zoom: 19
     }));
};

      function panthronInt(){
  map.setView(new ol.View({
            center: thronIntMecator,
            zoom: 19
     }));
};

function panchildDev(){
  map.setView(new ol.View({
            center: childDevMecator,
            zoom: 19
     }));

};

function pancollegeInn(){
  map.setView(new ol.View({
            center: collegeInnMecator,
            zoom: 19
     }));

};

function pancollegeOfEdu(){
  map.setView(new ol.View({
            center: collegeOfEdu,
            zoom: 19
     }));

};

function pancolorado(){
  map.setView(new ol.View({
            center: coloradoMecator,
            zoom: 19
     }));

};
function pancomal(){
  map.setView(new ol.View({
            center: comalMecator,
            zoom: 19
     }));

};
function pancomDinn(){
  map.setView(new ol.View({
            center: comalMecator,
            zoom: 19
     }));

};
function panderrick(){
  map.setView(new ol.View({
            center: derrickMecator,
            zoom: 19
     }));

};

function pangaryStGar(){
  map.setView(new ol.View({
            center: garyStGarMecator,
            zoom: 19
     }));

};
function panelliott(){
  map.setView(new ol.View({
            center: elliottMecator,
            zoom: 19
     }));

};
function panmcCoy(){
  map.setView(new ol.View({
            center: mcCoyMecator,
            zoom: 19
     }));

};
function panencinoH(){
  map.setView(new ol.View({
            center: encinoHMecator,
            zoom: 19
     }));

};
function panevansLiber(){
  map.setView(new ol.View({
            center: evansLiberMecator,
            zoom: 19
     }));

};
function panfallHall(){
  map.setView(new ol.View({
            center: fallHallMecator,
            zoom: 19
     }));

};
function panfamConSci(){
  map.setView(new ol.View({
            center: famConSciMecator,
            zoom: 19
     }));

};
function panfreemanAquBio(){
  map.setView(new ol.View({
            center: freemanAquBioMecator,
            zoom: 19
     }));

};

function pangiallaHall(){
  map.setView(new ol.View({
            center: giallaHallMecator,
            zoom: 19
     }));

};

function panharrisH(){
  map.setView(new ol.View({
            center: harrisHMecator,
            zoom: 19
     }));

};
function panhillHouse(){
  map.setView(new ol.View({
            center: hillHouseMecator,
            zoom: 19
     }));

};
function panhinesAcCen(){
  map.setView(new ol.View({
            center: hinesAcCenMecator,
            zoom: 19
     }));

};
function paniveyMoore(){
  map.setView(new ol.View({
            center: iveyMooreMecator,
            zoom: 19
     }));

};
function panjacksonH(){
  map.setView(new ol.View({
            center: jacksonHMecator,
            zoom: 19
     }));

};
function panjcKellamAm(){
  map.setView(new ol.View({
            center: jcKellamAmMecator,
            zoom: 19
     }));

};
function panjeromeCole(){
  map.setView(new ol.View({
            center: jeromeColeMecator,
            zoom: 19
     }));

};
function panjoannCole(){
  map.setView(new ol.View({
            center: joannColeMecator,
            zoom: 19
     }));

};

function panjowers(){
  map.setView(new ol.View({
            center: jowersMecator,
            zoom: 19
     }));

};

function panjones(){
  map.setView(new ol.View({
            center: jonesMecator,
            zoom: 19
     }));

};

function panlampasa(){
  map.setView(new ol.View({
            center: lampasasMecator,
            zoom: 19
     }));

};

function panlantanaH(){
  map.setView(new ol.View({
            center: lantanaHMecator,
            zoom: 19
     }));

};

function panlaurelH(){
  map.setView(new ol.View({
            center: laurelHMecator,
            zoom: 19
     }));

};

function panlbjParking(){
  map.setView(new ol.View({
            center: lbjParkingMecator,
            zoom: 19
     }));

};

function panlbjStCent(){
  map.setView(new ol.View({
            center: lbjStCentMecator,
            zoom: 19
     }));

};

function panmathCS(){
  map.setView(new ol.View({
            center: mathCSMecator,
            zoom: 19
     }));

};
/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/