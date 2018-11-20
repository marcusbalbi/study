const http = require('http')

const url = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

let getUrlContent = (url, callbackEnd  = () => {}) => {
  if (!url) {
    callbackEnd()
  }
  http.get(url, (response) => {
    response.setEncoding('utf8')
    let allData = ''
    response.on('data', (data) => {
      allData += data
    })
    response.on('end', () => {
      callbackEnd(allData)
    })
  })
}

let displayData = (allData) => {
  console.log(allData)
}

getUrlContent(url, (allData) => {
  console.log(allData)
  getUrlContent(url2, (allData) => {
    console.log(allData)
    getUrlContent(url3, (allData) => {
      console.log(allData)
    })
  })
})
