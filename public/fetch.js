//Progessive  Enhancement (SW supported)

if(navigator.serviceWorker) {

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  navigator.serviceWorker.register('/sw.js').then((registration) => {
    let pubKey = "BEGfZsv0cBFyYwccvhCgOFiMlt_UbmTP-lx3XYZR7tUHrXWlGw9n4wLY-xq7BzB4ow8FgCFiS_aHHRhEqQTLYUw"

    registration.pushManager.getSubscription().then((sub) => {
      if(sub) return sub

      let applicationServerKey = urlBase64ToUint8Array(pubKey)

      return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey})

  }).then( sub => sub.toJSON())
      .then(console.log)

  }).catch(console.log)
}
