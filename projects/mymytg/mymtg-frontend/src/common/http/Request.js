import axios from 'axios'
import { serverConfig } from 'src/config'
import { toast } from 'src/common/components/notification/toast/Toast'
let _instance = null
export default class Request {

  constructor (config = {}) {
    this._config = serverConfig
    this._activeRequests = 0
    this._toast = toast
    this._axios = axios.create(Object.assign(this._config, config))
  }
  // can be used like a singleton
  static getInstance () {
    if (!_instance) {
      _instance = new Request()
    }
    return _instance
  }

  get (url, data = {}) {
    return this._send(url, 'GET', data)
  }

  post (url, data = {}) {
    return this._send(url, 'POST', data)
  }

  put (url, data = {}) {
    data._method = 'PUT'
    return this._send(url, 'PUT', data)
  }

  delete (url, data = {}) {
    data._method = 'DELETE'
    return this._send(url, 'DELETE', data)
  }

  option (url, data = {}) {
    return this._send(url, 'OPTION', data)
  }

  _send (url, method = 'GET', data = {}) {
    this._incrementActiveRequests()
    let promise = this._axios.request({
      url,
      method,
      params: method === 'GET' ? data : null,
      data: method !== 'GET' ? data : null
    })

    return this._prepareResponse(promise)
  }

  _prepareResponse (promise) {
    this._decrementActiveRequests()
    promise.then((response) => { this._handleSuccessResponse(response) })
      .catch((error) => { this._handleErrorResponse(error) })
    return promise
  }

  _handleSuccessResponse (response) {
    return response
  }

  _handleErrorResponse (error) {
    this._renderErroIfEnabled(error)

    if (!error.response) {
      return this._noResponse(error)
    }
    let httpStatus = error.response.status
    switch (httpStatus) {
      case 401: {
        //  need to change to Login/Relogin state
      }
    }
    return error.response
  }

  _renderErroIfEnabled (error) {
    if (!this._config.renderError) {
      return
    }

    if (!error.response) {
      this._toast.error('No connection with the server!', 'Connection lost')
      return
    }

    let httpStatus = error.response.status
    switch (httpStatus) {
      case 400: {
        let errors = error.response.data.errors
        let detailMessage = ''
        for (let e in errors.detail) {
          detailMessage += `${e} : ${errors.detail[e].join(';')} </br>`
        }
        this._toast.error(detailMessage, errors.title)
        break
      }
      default: {
        if (error.response.data) {
          this._toast.error(error.response.data.errors.title, error.response.data.errors.exception_name)
        }
      }
    }
  }

  waitActiteRequests () {
    return new Promise((resolve, reject) => {
      if (this._hasActiveRequests()) {
        // resolve()
        // return
      }
      let interval = 10
      let maxCount = (this._config.timeout || 1000) / interval
      let p = setInterval(() => {
        if (this._hasActiveRequests() === false) {
          resolve()
          clearInterval(p)
        } else if (maxCount === 0) {
          clearInterval(p)
          reject(new Error('the requests never ends!'))
        } else {
          maxCount--
        }
      }, interval)
    })
  }

  enableErrorRender () {
    this._config.renderError = true
  }

  disableErrorRender () {
    this._config.renderError = false
  }

  _noResponse (error) {
    return error
  }

  _incrementActiveRequests () {
    this._activeRequests++
  }

  _decrementActiveRequests () {
    this._activeRequests--
  }

  _hasActiveRequests () {
    return this._activeRequests > 0
  }

}
