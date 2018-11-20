const http = require('http')

const url = process.argv[2]
let allData =  ''
http.get(url, (response) => {
  response.setEncoding('utf8')
  response.on('data', (data) => {
    allData += data
  })

  response.on('end', () => {
    console.log(allData.length)
    console.log(allData)
  })
})
