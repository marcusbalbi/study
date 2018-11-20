import lodash from 'lodash'
class MyMtgModel {
  construct () {
  }
  clean () {
    Object.keys(this).forEach((propName) => {
      this._clenProprety(propName)
    })
  }

  _clenProprety (propName) {
    let functionName = this._buildCleanMethodName(propName)
    if (lodash.isFunction(this[functionName])) {
      this[functionName]()
      return
    }
    this[propName] = null
  }

  _buildCleanMethodName (propName) {
    return lodash.camelCase('clean_' + propName)
  }

  isModel () {
    return true
  }

}

export default MyMtgModel
