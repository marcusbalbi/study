const fs = require('fs')
const zlib = require('zlib')
const stream = fs.createReadStream(__dirname + '/bigtextfile.txt')

const compressed = fs.createWriteStream(__dirname + '/copybigtextfile.txt.gz')

const gzippedStream  = zlib.createGzip()

stream.pipe(gzippedStream).pipe(compressed)
