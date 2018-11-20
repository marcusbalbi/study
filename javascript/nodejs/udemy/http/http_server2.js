const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile(__dirname + '/html/index.html', (err, data) => {
    res.end(data)
  })
})

server.listen(3000, () => { console.log('server listen on 3000') })
