const CACHE_NAME = "version-1"
const urlsToCache = [ 
'index.html', 
'offline.html',
'favicon.png',
'logo192.png',
'logo512.png',
'../src/App.js',
'../src/App.scss',
'../src/components/character.js',
'../src/components/characters.js',
'../src/components/location.js',
'../src/components/locations.js',
'../src/components/profile.js'
]

const self = this

// install sw
self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('[Service Worker] Caching all: app shell and content');
				return cache.addAll(urlsToCache)
			})
	)
})

// listen for requests
self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((res) => {
			console.log('[Service Worker] Fetching resource: ' + e.request.url)
			return res || fetch(e.request).then((response) => {
					return caches.open(CACHE_NAME).then((cache) => {
			  	console.log('[Service Worker] Caching new resource: ' + e.request.url);
			    cache.put(e.request, response.clone())
			    return response
			    .catch(() => caches.match('offline.html'))
			  })
			})
		})
	)
})


// self.addEventListener("fetch", event => {
// 	  event.respondWith(
// 	      fetch(event.request).catch(err =>
// 	        self.cache.open(CACHE_NAME).then(cache => cache.match("/offline.html"))
// 	      )
// 	  );
// });

// activate sw
self.addEventListener('activate', (e) => {
	e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    })
  )
})