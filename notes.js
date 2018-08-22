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
