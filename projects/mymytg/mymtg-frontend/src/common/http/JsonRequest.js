import $ from 'jquery'
import { serverConfig } from 'src/config'
class JsonRequest {

  constructor (baseUrl = serverConfig.baseURL) {
    this.baseUrl = baseUrl
  }

  get (uri, data = {}) {
    return this._send(uri, 'GET', data)
  }

  post (uri, data = {}) {
    return this._send(uri, 'POST', data)
  }

  put (uri, data = {}) {
    data._method = 'PUT'
    return this._send(uri, 'PUT', data)
  }

  delete (uri, data = {}) {
    data._method = 'DELETE'
    return this._send(uri, 'DELETE', data)
  }

  option (uri, data = {}) {
    return this._send(uri, 'OPTION', data)
  }

  _compileUrl (uri) {
    return `${this.baseUrl}/${uri}`
  }

  _send (uri, method = 'POST', data = {}) {
    let jQueryPromise = $.ajax({
      method: method,
      url: this._compileUrl(uri),
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
    return Promise.resolve(jQueryPromise)
  }

}

export default JsonRequest
