'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "743dffcadbdd5ce8b1805e032cd64403",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"index.html": "f045f171f7d68b72d53ba94bf292368d",
"/": "f045f171f7d68b72d53ba94bf292368d",
"main.dart.js": "283f3b92b88f2551ad0764ddc2c8fc8c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e4a84e7a863fc15bb6a46bfdca624529",
"assets/AssetManifest.json": "a47ed4cb9015c572b02ff7270d9697a2",
"assets/NOTICES": "cc47cbeb6558c1d6f85a73f4f05f22a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9d5b93bcfb921cf1e6007dc4c3b6d45d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a938951e4a1e0967685670805aa5a33",
"assets/fonts/MaterialIcons-Regular.otf": "d681f95949317125950197aa9c618eec",
"assets/assets/picimg.jpeg": "a79593d2e055c6880a76ca9e94b1c140",
"assets/assets/app.png": "ff7b1944ba1dbab2a6f9499821660eac",
"assets/assets/github.svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/astavakra_gita/asta4.jpg": "705be4bc546f7c4ea4ad80d12962e58c",
"assets/assets/astavakra_gita/asta1.jpg": "99b37f63f07e51826867b58defdd4719",
"assets/assets/astavakra_gita/asta3.jpg": "22c701e2ac3cfaa3bf679bfba5fd4d5c",
"assets/assets/astavakra_gita/asta2.jpg": "68f5019898108a3b78da7fa47f303e85",
"assets/assets/astavakra_gita/asta_main.png": "3ffdfb86c2675e92f61314ebf4c4478e",
"assets/assets/instagram.svg": "4c7ce1b03d039e985ccc196099fde994",
"assets/assets/webL.png": "2fbf8e5c400b769053677ef23509540e",
"assets/assets/firebase.png": "c7c2e3514a4f34cc2bbad0f999e7b6a7",
"assets/assets/works.jpg": "0907ffb54cb407a07e8f46dceb7e740f",
"assets/assets/port_web.png": "c7ace857eb1e433777466a20b1a24dac",
"assets/assets/portfolio_screenshot.PNG": "69627e9164a33db683e4107acbca7829",
"assets/assets/contact_image.jpg": "d4e5f70ba04adc3b6c323955ff8b0365",
"assets/assets/flipshop/flip1.png": "b32137729c2bd7508ef6609fa4b3595b",
"assets/assets/flipshop/flip3.png": "f4cda4d67a2f8d2e2ade7784e2a222a6",
"assets/assets/flipshop/flip2.png": "8f26e4b949d954b01f7a9b3bf384c5e6",
"assets/assets/flipshop/flip_main.png": "93f278afecb68724456eef3fb79a97af",
"assets/assets/flipshop/flip4.png": "d94f947f19fb4eaab1fc2d95056249db",
"assets/assets/blog.jpg": "548f56bd9468e111aca0e1aeed736c03",
"assets/assets/task_buddy/buddy_main.png": "adad09c5c24acd7e328828e4370c5267",
"assets/assets/task_buddy/buddy1.jpeg": "b2c9e50d74596bddd420ace7c97b2325",
"assets/assets/task_buddy/buddy2.jpeg": "149e22d29edd363923761aff403ac914",
"assets/assets/task_buddy/buddy3.jpeg": "ac3516c0de690bef1b792f78992cc6c2",
"assets/assets/web.jpg": "33bd0bdff5cb1b184c6def34b5df3292",
"assets/assets/portfolio/port_main.png": "c7ace857eb1e433777466a20b1a24dac",
"assets/assets/weather/wea3.png": "aeeb48b3a9462a9796ad83b4572e5bf3",
"assets/assets/weather/wea2.png": "12c2ed8686b0ec77e24a3a39351d9dd3",
"assets/assets/weather/wea1.png": "fa7fc1acc087f3f5d8e160400707095c",
"assets/assets/weather/wea_main.png": "b82abdbd3ef151fa38e98b1364767ed1",
"assets/assets/mock_test/mock3.png": "847d6103742c241488e5febf4f786210",
"assets/assets/mock_test/mock2.png": "6d1e0dc09b91a56791d47a217604d8d7",
"assets/assets/mock_test/mock1.png": "40fe6e333d299b8623276c5c138144be",
"assets/assets/mock_test/mock_main.png": "443d600eb9d0a0135504bca4f9d3b016",
"assets/assets/twitter.svg": "66785e12f335c0c6657a6f04e77b812c",
"assets/assets/my_pic.jpeg": "cd1c581904ff4574b95f5c389e7d1293",
"assets/assets/astroapp/astro1.png": "a8ec26974bd532c9f7512a09b2b8e3fe",
"assets/assets/astroapp/astro2.png": "69076f1e4eb2b7e537f172941a8d3c50",
"assets/assets/astroapp/astro_main.png": "efaf5d6c4d55c184047515b5953133e0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
