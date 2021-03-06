//5. Cache and Network Race
let firstResponse = new Promise((resolve, reject) => {
  //try network for request
  fetch(e.request ).then((res) => {
    ries.ok ? resolve(res) : rejectOnce()
  }).catch(rejectOnce)

  //try cache
  caches.match(e.request).then((res) => {
    res ? resolve(res) : rejectOnce()
  }).catch(rejectOnce)
})
e.respondWith(firstResponse)

//4. Cache with Network Update
// e.respondWith(
//   caches.open(pwaCache).then((cache) => {
//
//     return cache.match(e.request).then((res) => {
//       let updatedRes = fetch(e.request).then((newRes) => {
//          cache.put(e.request, newRes.clone())
//
//          return newRes
//       })
//
//       return res || updatedRes
//     })
//   })
// )

//3. Network with Cache fallback
// e.respondWith(
//   fetch(e.request).then((res) => {
//     caches.open(pwaCache).then(cache => cache.put(e.request, res))
//
//     return res.clone()
//   }).catch(err => caches.match(e.request))
// )

//2. Cache with network fallback
// e.respondWith(
//   caches.match(e.request).then((res) => {
//     if(res) return res
//
//     return fetch(e.request).then((newRes) => {
//       caches.open(pwaCache).then(cache => cache.put(e.request, newRes))
//
//       return newRes.clone()
//     })
//   })
// )
//1. Cache only. Static assets - App Shell
// e.respondWith(caches.match(e.request))
