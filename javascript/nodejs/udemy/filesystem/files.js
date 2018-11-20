const fs = require('fs')

const path = __dirname + '/text.txt'
const fileBuffer = fs.readFileSync(path)
console.log(fileBuffer)
const file = fs.readFileSync(path, 'utf-8')
console.log(file)

fs.readFile(path, (err, data) => {
  console.log(err, data.toString(), '---- end!')
})

fs.readFile(path, 'utf-8',(err, data) => {
  console.log(err, data, '---- end!')
})

console.log('it is async, non blockinggs!')
