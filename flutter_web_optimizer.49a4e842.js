    // The code below is injected by flutter web optimizer, do not edit!!!!!!

    // window.assetBase
    var assetBase = "https://nxvsxenuspwfodejfuvb.supabase.co/storage/v1/object/public/wedding_inv_asset/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.ff998d5b.dart.js",
  "main.dart_0.js": "main.94598fac.dart_0.js",
  "main.dart_1.js": "main.435c1fda.dart_1.js",
  "main.dart_2.js": "main.631f258f.dart_2.js",
  "main.dart_3.js": "main.fd441b7a.dart_3.js",
  "main.dart_4.js": "main.d8106f2e.dart_4.js",
  "main.dart_5.js": "main.5a6dda04.dart_5.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.bin": "assets/AssetManifest.1347e323.bin",
  "assets/AssetManifest.bin.json": "assets/AssetManifest.82db5d1d.bin.json",
  "assets/AssetManifest.json": "assets/AssetManifest.a9869900.json",
  "assets/FontManifest.json": "assets/FontManifest.2e2c6625.json",
  "assets/fonts/MaterialIcons-Regular.otf": "assets/fonts/MaterialIcons-Regular.8ea08ea2.otf",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "assets/packages/cupertino_icons/assets/CupertinoIcons.e986ebe4.ttf",
  "canvaskit/canvaskit.js": "canvaskit/canvaskit.js",
  "canvaskit/canvaskit.js.symbols": "canvaskit/canvaskit.js.symbols",
  "canvaskit/canvaskit.wasm": "canvaskit/canvaskit.wasm",
  "canvaskit/chromium/canvaskit.js": "canvaskit/chromium/canvaskit.js",
  "canvaskit/chromium/canvaskit.js.symbols": "canvaskit/chromium/canvaskit.js.symbols",
  "canvaskit/chromium/canvaskit.wasm": "canvaskit/chromium/canvaskit.wasm",
  "canvaskit/skwasm.js": "canvaskit/skwasm.js",
  "canvaskit/skwasm.js.symbols": "canvaskit/skwasm.js.symbols",
  "canvaskit/skwasm.wasm": "canvaskit/skwasm.wasm",
  "canvaskit/skwasm.worker.js": "canvaskit/skwasm.worker.js",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.589d73e4.js",
  "icons/Icon-192.png": "icons/Icon-192.ac9a721a.png",
  "icons/Icon-512.png": "icons/Icon-512.96e75261.png",
  "icons/Icon-maskable-192.png": "icons/Icon-maskable-192.c457ef57.png",
  "icons/Icon-maskable-512.png": "icons/Icon-maskable-512.301a7604.png",
  "main.dart.js": "main.ff998d5b.dart.js",
  "main.dart_0.js": "main.94598fac.dart_0.js",
  "main.dart_1.js": "main.435c1fda.dart_1.js",
  "main.dart_2.js": "main.631f258f.dart_2.js",
  "main.dart_3.js": "main.fd441b7a.dart_3.js",
  "main.dart_4.js": "main.d8106f2e.dart_4.js",
  "main.dart_5.js": "main.5a6dda04.dart_5.js",
  "manifest.json": "manifest.f7c3c5f3.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return element.getAttribute(property);
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith(assetBase)) {
                v = v.replace(assetBase, '');
              }
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
    
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
    
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }
    })();
    
    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
    
      var key = uri.toString().replace(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
      var src = assetBase + mainjsManifest[key];
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    