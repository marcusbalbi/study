const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('access to: ' + req.url, req.url === '/api')
  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ name: 'Jhon', age: 12 }))
  }

  if (req.url === '/index') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return fs.createReadStream(__dirname + '/html/index.html').pipe(res)
  }

  res.writeHead(404)
  res.end()
})

server.listen(3000, () => { console.log('server listen on 3000') })
