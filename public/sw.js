

self.addEventListener('message', (e) => {
  // if(e.request.url.endsWith('/greet')) {
  //
  //   let headers = new Headers({'Content-Type': 'text/html'})
  //   let customRes = new Response('<h1>Hello World</h1>', {headers})
  //
  //   e.respondWith(customRes)
  // }

  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage("Hello from serviceWorker!")
    })
  })


  // if(e.request.url.endsWith('/camera_feed.html')) {
  //
  //   e.respondWith(
  //     fetch(e.request)
  //       .then((res) => {
  //         if(res.ok) return res
  //
  //         return new Response('Camera feed currently not avaiable.')
  //       })
  //   )
  // }
})
