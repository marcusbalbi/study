class Model {

  constructor (config = {}) {
    this._applyConfig(config)
  }

  set currentPage (page) {
    this._current_page = page
  }

  get currentPage () {
    return this._current_page
  }

  get total () {
    return this._total
  }

  get perPage () {
    return this._per_page
  }

  get lastPage () {
    return this._last_page
  }

  get nextPageUrl () {
    return this._next_page_url
  }

  get prevPageUrl () {
    return this._prev_page_url
  }

  get from () {
    return this._from
  }

  get to () {
    return this._to
  }

  get nextPage () {
    return this._current_page >= this._last_page ? this._last_page : this._current_page + 1
  }

  get previusPage () {
    return this._current_page <= this._first_page ? this._first_page : this._current_page - 1
  }

  get firstPage () {
    return 1
  }

  update (config) {
    this._applyConfig(config)
  }

  _applyConfig (config) {
    this._total = config.total || 0
    this._per_page = config.per_page || 15
    this._current_page = config.current_page || 1
    this._last_page = config.last_page || 0
    this._next_page_url = config.next_page_url || null
    this._prev_page_url = config.prev_page_url || null
    this._from = config.from || 1
    this._to = config.to || 15
  }
}

export default Model
