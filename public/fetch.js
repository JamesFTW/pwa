//Progessive  Enhancement (SW supported)

if(navigator.serviceWorker) {

  navigator.serviceWorker.register('/sw.js').then((registration) => {

    if(registration.active) {
      registration.active.postMessage('respond to this')
    }


  }).catch(console.log)

  navigator.serviceWorker.addEventListener('message', (e) => {
    console.log(e.data)
  })

}



//fetch camera feed
//
// fetch('camera_feed.html').then((res) => {
//   return res.text()
// })
//   .then((html) => {
//     document.getElementById('camera').innerHTML = html
//   })

// fetch('/template.html').then((response) => {
//   return response.text()
// }).then((html) => {
//   document.getElementById('body').innerHTML = html
// })
