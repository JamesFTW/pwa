//
// self.addEventListener('push', (e) => {
//
//   let n = self.registration.showNotification('A notification from the SW')
//
//
//   e.waitUntil(n)
//
// })

const pwaCache = 'pwa-cache-1'

self.addEventListener('install', (e) => {
  let cacheReady = caches.open(pwaCache).then((cache) => {
    console.log('New Cache Ready')

    return cache.add('/')
  })

  e.waitUntil(cacheReady)
})

self.addEventListener('fetch', (e) => {
  if(e.request.url === 'http://localhost:3000/') {
    let newRes = caches.open(pwaCache).then((cache) => {
      return cache.match(e.request)
    })

    e.respondWith(newRes)
  }
})
