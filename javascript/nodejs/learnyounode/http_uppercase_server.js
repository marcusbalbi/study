const http = require('http')

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    response.end('Send me a POST')
  }
  request.on('data', (chunk) => {
    response.write(chunk.toString('utf8').toUpperCase())
  })

  request.on('end', response.end)
})


server.listen(Number(process.argv[2]))
