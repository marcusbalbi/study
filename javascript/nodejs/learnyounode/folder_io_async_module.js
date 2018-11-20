let fs = require('fs')
var path = require('path')

module.exports = (pathName, extension, callback) => {
  const ext = "." + extension
  let files = []
  fs.readdir(pathName, (err, dir) => {
    if (err) {
      return callback(err)
    }
    dir.forEach((fileName) => {
      if(path.extname(fileName) === ext) {
        files.push(fileName)
      }
    })
    return callback(null, files)
  })
}
