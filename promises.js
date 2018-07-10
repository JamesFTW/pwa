const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World'))


addExtra = (price) => {
  return new Promise((resolve, reject) => {
    if (price > 2) reject("Price cannont exceed 3")

     setTimeout(function() {
       resolve(price + 1)
     }, 300)
  })
 }

const price = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("Price A")
  }, 300)
})

const slowPrice = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("Price B")
  }, 800)
})

const promises = [price, slowPrice]

//returns an array of all resolved values.
Promise.all(promises).then((resolvedPromises) => {
  console.log(resolvedPromises)
})

//returns first resolved value
Promise.race(promises).then((firstDone) => {
  console.log(firstDone)
})
