let fs = require('fs')

const buffer = fs.readFileSync(process.argv[1])

console.log(buffer.toString().split('\n').length -1);
