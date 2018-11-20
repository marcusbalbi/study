let fs = require('fs')
var path = require('path')

const pathName = process.argv[2];
const extension = "." + process.argv[3];
fs.readdir(pathName, (err, dir) => {
  if (err) {
    console.log(err);
  }
  dir.forEach((fileName) => {
    if(path.extname(fileName) === extension) {
      console.log(fileName)
    }
  })
})
