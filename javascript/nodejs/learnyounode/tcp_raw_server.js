let net = require('net')

let port = process.argv[2];

let server = net.createServer((socket) => {
  let date = new Date()

  // month
  let month = date.getMonth() + 1;
  month = month <= 9 ? '0' + month : month

  // day
  let day = date.getDate();
  day = day <= 9 ? '0' + day : day

  // hours
  let hours = date.getHours();
  hours = hours <= 9 ? '0' + hours : hours

  // minutes
  let minutes = date.getMinutes();
  minutes = minutes <= 9 ? '0' + minutes : minutes
  let formattedDate = `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}\n`
  socket.end(formattedDate)
})

server.listen(port)
