let folderList = require('./folder_io_async_module')

const pathName = process.argv[2];
const extension = process.argv[3];

folderList(pathName, extension, (err, data) => {
  data.forEach((item) => {
    console.log(item)
  })
})
