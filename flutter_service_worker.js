'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "9b358465500e55a9c2605381f3a14ad4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6fc1a46b9c569e71f69f64a767590bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f19ee32d5a0b75df1e69a7430c30071b",
".git/logs/refs/heads/master": "f19ee32d5a0b75df1e69a7430c30071b",
".git/logs/refs/remotes/origin/master": "9696fd32c1a86113af210e6de68eef6a",
".git/objects/17/383088a7cf3def82cb35a69b885ba6d2c6dc03": "9a2e4671a5448b26bb43c43b04dfe651",
".git/objects/17/592ad832d8056b6320fec09c65e54219387c07": "d160596c17723687c3ad1622bb6f7aa6",
".git/objects/1d/40f583859ed4d861468748a36a914145f4f9c9": "01d501f687fc47254bc5a981197a9df4",
".git/objects/1f/ef43b01c356c25908f73a8286799fa5eada66a": "fb65f725826387c673284073ce7dfd26",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/1628ff1221e97e087f47754d8a4316d040b5b6": "f29dee1d59fa5e4e5257b9367e2a5920",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/633b420c9746f336c1f29e85361366c05e305b": "71e8597f1b0767eff758d445954feb04",
".git/objects/3c/8aef82ab410ef32da064e922c4b0cf891d4030": "03bb52676fc9a54d769e18f3164af348",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/0ec92fb156571c888f85712cc764c18d13eea9": "de6edff0e2d02c4388496a787aed9ac5",
".git/objects/4a/e5ce6de8495c70d2f735343b762eaeedc09021": "d29bdf95f1220d230f04c8ae71335ccb",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/0c43759134fa5554aa0cf40be8039cee219653": "dac14d5f40afa4bb9bb23b960cfe76ab",
".git/objects/88/54490039d9cba2ddb45858029154c15b72529a": "2e601ab479be49cbaf8eee22acb609f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f343b437c36bacd895183f6572a6d06c4c9a98": "44db2a4810436125bcccb51bec62af27",
".git/objects/98/4ea253e62c357b334fc7cea58ae38b33a7d868": "ddd66bc1bf0fa3a06cd35aabb1b7202e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/411c8c515e01e0b9613df3a45ae73feb3f21d3": "ce366620d1148e44fd710df6f1b1017c",
".git/objects/aa/009770dda153dad597be0fd07f16ba03723656": "6830541ca4a0e1bab1db51c190dd0cd1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/9141f02cc3e97721de0846c0606075e56558ae": "08d91c9b10a51ba4cdc09e4eb33543ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d2/82c4dcc90ff53f59b8229294298bdf626b9a5c": "7400c9768d64490d32a635f2d9863317",
".git/objects/d6/4892a3bb387e7e52f2c3daf72a3e8109e8d71a": "b22ed8f2d2cb8dc52f37e0c4fbd6dffd",
".git/objects/e5/3037d4ab9689f4a47494f3810c4a18975d59fd": "9121bd65a3c3f24ee68f6aeee06027df",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fa/f1040eb79f3952ef825e76482dd52e4abb2947": "6c46f63bc1c3b805d13a0b4cc8575dc9",
".git/refs/heads/master": "21b51e7ecdf4d33bed1bf9067926b1c5",
".git/refs/remotes/origin/master": "21b51e7ecdf4d33bed1bf9067926b1c5",
"assets/AssetManifest.json": "b49ae060a0ae3aafb3fc8138d26c62e6",
"assets/assets/images/anselms.png": "7cbbb069e3c84d5e357854214dd7318f",
"assets/assets/images/bits.png": "47542b3abba10454a4685670eb3fcafb",
"assets/assets/images/B_2.jpg": "447b123f4ffe7549bdb75703d9aa94ba",
"assets/assets/images/cambridge.png": "b1aea7b253d2b6648746be81199305e1",
"assets/assets/images/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/images/gmail.png": "e00220b546d7b945d234fcb08dd2d808",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin.png": "3f25fde0440cd316a514d72011d95d5f",
"assets/assets/images/reddit.png": "4dc5ff3f1a948ccec377492d54c4d2c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9f801cd839e8398ac0d618eed00caf21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0362a2bbe8720edcca86cf91ea555ce9",
"/": "0362a2bbe8720edcca86cf91ea555ce9",
"main.dart.js": "13a9dcb49b28bc22d294f8a100b1dc81",
"manifest.json": "ffa6ddd0f98d0d5d5c8f0d704c6fe8da",
"version.json": "92a047e12e6cc776051d519221dfb5a1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
