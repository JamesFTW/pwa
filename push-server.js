
const webpush = require('web-push')
const vapid   = require('./vapid.json')

webpush.setVapidDetails(
  'mailto:bdaddyja@gmail.com',
  vapid.publicKey,
  vapid.privateKey
)

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/difBjfWfOaU:APA91bGhDg4VuNxZhPoD-y1G1T4r7FihncHiJjrIxaz2iD1E9EMtXC0j-rk_WGuAd8ANMv4WpicafQ91CE_vVxq_LQ06u0Jr_QZBPLmwVaEoECZRZqhFTzkBi1d0gIsQg8sdg8pKyaD-uZ5qBL4BAavrVmL3rYvL-Q',
  keys: {
    auth: '6FIC2iuec_uT39cyjdTGAQ',
    p256dh: 'BCjFhYYQ89aJ-DNIpGiur0ln4yilrctde0wGfWuxQeC_BgL7Sps38iAU_jgVhwjWfUbeJxykvh8pO1YnUtJK8bM'
  }
}

webpush.sendNotification(pushSubscription, 'A notification from push server')
console.log('Push to client')
