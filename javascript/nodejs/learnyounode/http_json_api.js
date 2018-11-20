const http = require('http')

const server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.end('Send me a GET')
  }
  const urlInfo = request.url.split('?')
  const queryStringInfo = urlInfo[1].split('=')
  let date = new Date(queryStringInfo[1])
  response.writeHead(200, { 'Content-Type': 'application/json' })

  if (urlInfo[0] === '/api/parsetime') {
    let objResponse = {
       "hour": date.getHours(),
       "minute": date.getMinutes(),
       "second": date.getSeconds()
     }
    response.write(JSON.stringify(objResponse))
    response.end()
  }

  if (urlInfo[0] === '/api/unixtime') {
    let objResponse = {
       "unixtime": date.getTime()
     }
    response.write(JSON.stringify(objResponse))
    request.on('end', response.end)
  }

})


server.listen(Number(process.argv[2]))
