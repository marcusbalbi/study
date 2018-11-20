const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Ola mundo!')
})

server.listen(3000, () => { console.log('server listen on 3000') })
