const fs = require('fs')

let chunckSize = 32 * 1024

const stream = fs.createReadStream(__dirname + '/bigtextfile.txt',
{ encoding: 'utf-8', highWaterMark: chunckSize })

const writeStream = fs.createWriteStream(__dirname + '/copybigtextfile.txt')



stream.on('data', (chunk) => {
  if (chunk.length < chunckSize) {
    writeStream.write(chunk)
  }
})
