const request = require('request')

let baseUrl = 'https://api.github.com'
let baseParams = {
  json: true,
  headers: {
    'user-agent': 'BalbiAPI',
    Authorization: ''
  }
}

module.exports = (endpoint, pOptions = {}) => {
  let url = `${baseUrl}/${endpoint}`
  let options = Object.assign({}, baseParams, pOptions)

  return new Promise((resolve, reject) => {
    request(url, options, (err, res, body) => {
      if (err) {
        return reject(new RequestError('Falha na requisição: ' + err.message, null))
      } else if (res.statusCode !== 200) {
        return reject(new RequestError('Falha na requisição: ' + res.statusMessage, res))
      }
      resolve(body)
    })
  })
}


class RequestError extends Error {
  constructor(message, res) {
    super(message)
    this.response = res
  }
}
