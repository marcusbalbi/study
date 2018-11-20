import Request from './Request'
import { join, isEmpty, isUndefined, isNull } from 'lodash'

class MyMtgService {
  constructor () {
    this._request = this._defineRequest()
    this._resourceName = this.defineResourceName()
  }

  _defineRequest () {
    return Request.getInstance()
  }

  defineResourceName () {
    throw new Error('You need to provide a resource name to use MyMtgService with defineResourceName method')
  }

  search (filter = {}) {
    filter.fields = this._prepareFields(filter)
    filter.include = this._prepareInclude(filter)
    filter.paginate = this._preparePaginate(filter)
    filter.sort = this._prepareSort(filter)
    filter.filter = this._prepareFilter(filter)

    return this._request.get(this._resourceName, filter)
  }

  get (id) {
    if (!id) {
      throw new Error('You need to pass a id to use get of MyMtgService instance')
    }
    return this._request.get(`${this._resourceName}/${id}`)
  }

  create (data) {
    if (!data) {
      throw new Error('You need to pass a data object to create the resource')
    }
    return this._request.post(this._resourceName, data)
  }

  update (id, data) {
    if (!data) {
      throw new Error('You need to pass a data object to update the resource')
    }
    return this._request.put(`${this._resourceName}/${id}`, data)
  }

  delete (id) {
    if (!id) {
      throw new Error('You need to pass a id to use delete of MyMtgService instance')
    }
    return this._request.delete(`${this._resourceName}/${id}`)
  }

  _prepareFields (filter) {
    if (!filter.fields || isEmpty(filter.fields)) {
      return undefined
    }
    return join(filter.fields, ',')
  }

  _prepareInclude (filter) {
    if (!filter.include || isEmpty(filter.include)) {
      return undefined
    }
    return join(filter.include, ',')
  }

  _preparePaginate (filter) {
    if (!filter.paginate) {
      return undefined
    }
    let perPage = filter.paginate.per_page || 15
    let page = filter.paginate.page || 1

    let pagination = `per_page=${perPage},page=${page}`
    return pagination
  }

  _prepareSort (filter) {
    if (!filter.sort || isEmpty(filter.sort)) {
      return undefined
    }
    return join(filter.sort, ',')
  }

  _prepareFilter (filter) {
    if (!filter.filter || isEmpty(filter.filter)) {
      return undefined
    }
    let arrFilters = []

    Object.keys(filter.filter).forEach((key) => {
      let f = filter.filter[key]
      if (!isNull(f) && !isUndefined(f)) {
        arrFilters.push(`${key}=${f}`)
      }
    })
    return arrFilters.length <= 0 ? undefined : join(arrFilters, ',')
  }
}

export default MyMtgService
