const request = require('request')

let i = 0

setInterval(() => {
  request.get('http://localhost:3000/api', null, () => {
    console.log('calling first api: ' + i)
  })
  i++

}, 400)