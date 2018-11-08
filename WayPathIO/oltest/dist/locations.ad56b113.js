// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"locations.js":[function(require,module,exports) {
//Follow this website for tutorial: https://openlayers.org/en/latest/doc/quickstart.html
var txState = [-97.942999, 29.888998];
var tmh = [-97.941480, 29.889306];
var fh = [-97.940402, 29.888836];
var alk = [-97.943114, 29.888868];
var acaService = [-97.939079, 29.888504];
var acadStGar = [-97.948008, 29.885892];
var agBuilding = [-97.938145, 29.890531];
var angelHall = [-97.953664, 29.889337];
var aquSpCent = [-97.937676, 29.890435];
var arnHall = [-97.943393, 29.890030];
var bexHall = [-97.948096, 29.886397];
var bareHall = [-97.940652, 29.888212];
var blanHall = [-97.951916, 29.887162];
var blancoPark = [-97.953026, 29.887134];
var ballPark = [-97.928224, 29.887702];
var bobStad = [-97.925486, 29.890878];
var bobStadEnd = [-97.925368, 29.890168];
var bobVill = [-97.922293, 29.893113];
var brazon = [-97.939905, 29.887792];
var brogHall = [-97.939902, 29.887772];
var butlHall = [-97.938757, 29.887084];
var centHall = [-97.940008, 29.889653];
var centerStuRet = [-97.940278, 29.885636];
var chautHall = [-97.946845, 29.890479];
var chem = [-97.939451, 29.889599]; //var txStateWebMercator1 = ol.proj.fromLonLat(tmh);

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
var blancoParkMercator = ol.proj.fromLonLat(blancoPark); //function to control Alkek

function panAlk() {
  map.setView(new ol.View({
    center: alkMercator,
    zoom: 19
  }));
}

; //function to control Alkek

function panTmh() {
  map.setView(new ol.View({
    center: tmhMercator,
    zoom: 19
  }));
}

; //function to control Academic Service

function panAcaServ() {
  map.setView(new ol.View({
    center: acaService,
    zoom: 19
  }));
}

; //function to control Academic services building

function panAcad() {
  map.setView(new ol.View({
    center: acaServiceMercator,
    zoom: 19
  }));
}

; //function to control Academy street garage

function panAcadGar() {
  map.setView(new ol.View({
    center: acadStGarMercator,
    zoom: 19
  }));
}

; //function to control Agriculture

function panAg() {
  map.setView(new ol.View({
    center: agBuildingMercator,
    zoom: 19
  }));
}

; //function to control Angelina

function panAngel() {
  map.setView(new ol.View({
    center: angelHallMercator,
    zoom: 19
  }));
}

; //function to control Aqua sports center

function panAqua() {
  map.setView(new ol.View({
    center: aquSpMercator,
    zoom: 19
  }));
}

; //function to control Aqua sports center

function panAquSpCen() {
  map.setView(new ol.View({
    center: aquSpMercator,
    zoom: 19
  }));
}

; //function to control Arnold Hall

function panArnHall() {
  map.setView(new ol.View({
    center: arnHallMercator,
    zoom: 19
  }));
}

; //function to control Bexar hall

function panBexH() {
  map.setView(new ol.View({
    center: bexHallMercator,
    zoom: 19
  }));
}

; //function to control baretta hall

function panBare() {
  map.setView(new ol.View({
    center: bareHallMercator,
    zoom: 19
  }));
}

; //function to control blanco hall

function panBlan() {
  map.setView(new ol.View({
    center: blanHallMercator,
    zoom: 19
  }));
}

; //function to control blanco parking

function panblanPark() {
  map.setView(new ol.View({
    center: blancoParkMercator,
    zoom: 19
  }));
}

; // function to control ball park

function panballPark() {
  map.setView(new ol.View({
    center: ballParkMercator,
    zoom: 19
  }));
}

; //---------------
// function to control ball park

function panbobStand() {
  map.setView(new ol.View({
    center: bobStadMercator,
    zoom: 19
  }));
}

;

function panbobStandEnd() {
  map.setView(new ol.View({
    center: bobStandEndMercator,
    zoom: 19
  }));
}

;

function panbobVill() {
  map.setView(new ol.View({
    center: bobVillMercator,
    zoom: 19
  }));
}

;

function panbrazon() {
  map.setView(new ol.View({
    center: brazonMercator,
    zoom: 19
  }));
}

;

function panbutlHall() {
  map.setView(new ol.View({
    center: butlHallMercator,
    zoom: 19
  }));
}

;

function pancentHall() {
  map.setView(new ol.View({
    center: centHallMercator,
    zoom: 19
  }));
}

;

function pancenterStuRet() {
  map.setView(new ol.View({
    center: centerStudRetMercator,
    zoom: 19
  }));
}

;

function panchautHall() {
  map.setView(new ol.View({
    center: chautHallMercator,
    zoom: 19
  }));
}

;

function panchem() {
  map.setView(new ol.View({
    center: chemMercator,
    zoom: 19
  }));
}

;
/*mapboxgl.accessToken = 'pk.eyJ1IjoibGVkYW5pZWxuIiwiYSI6ImNqbWxsZGQ0ZTA5amUzam55b3poaG0wN3UifQ.-6Mmg4GCbTFKybn_1i8dRg';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});*/
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52314" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","locations.js"], null)
//# sourceMappingURL=/locations.ad56b113.map