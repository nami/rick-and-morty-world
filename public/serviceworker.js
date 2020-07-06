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

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
})

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