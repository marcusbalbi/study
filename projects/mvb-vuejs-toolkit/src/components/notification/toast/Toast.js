import 'toastr/toastr.scss'
import toastr from 'toastr'

export class Toast {

  constructor (options) {
    let defaultOption = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': true,
      'positionClass': 'toast-bottom-right',
      'preventDuplicates': false,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }
    this._toastr = toastr

    this._applyOptions(defaultOption)
    this._applyOptions(options)
  }

  error (message, title, opts = {}) {
    this._applyOptions(opts)
    this._toastr.error(message, title)
  }

  info (message, title) {
    this._toastr.info(message, title)
  }

  success (message, title) {
    this._toastr.success(message, title)
  }

  warning (message, title) {
    this._toastr.warning(message, title)
  }

  _applyOptions (options) {
    this._toastr.options = Object.assign(this._toastr.options, options || {})
  }

}

export let toast = new Toast()
