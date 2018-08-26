
const version = '1.0'

const appAssets = [
  'index.html',
  'style.css',
  'main.js',
  'manifest.json',
  'images/flame.png',
  'images/logo.png',
  'images/sync.png',
  'vendor/bootstrap.min.css',
  'vendor/jquery.min.js'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(`static-${version}`)
      .then(cache => cache.addAll(appAssets))
  )
})


self.addEventListener('fetch', (e) => {
  let firstRejectRecieved = false

  let rejectOnce = () => {
    if(firstRejectRecieved) {
      reject('No response recieved')
    } else {
      firstRejectRecieved = true
    }
  }

  //5. Cache and Network Race
  let firstResponse = new Promise((resolve, reject) => {
    //try network for request
    fetch(e.request ).then((res) => {
      res.ok ? resolve(res) : rejectOnce()
    }).catch(rejectOnce)

    //try cache
    caches.match(e.request).then((res) => {
      res ? resolve(res) : rejectOnce()
    }).catch(rejectOnce)
  })
  e.respondWith(firstResponse)

})

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(pwaCache)
      .then(cache => cache.addAll(staticCache))
  )
})


self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if(key !== pwaCache) return caches.delete(key)
    })
  })

  e.waitUntil(cacheCleaned)
})
