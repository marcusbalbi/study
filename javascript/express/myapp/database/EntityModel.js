const mysqlManager = require('./mysqlManager')

function ModelNotFoundError (message) {
  this.message = message
  this.name = 'ModelNotFoundError'
}

class EntityModel {
  constructor () {
    this._table = this.defineTable()
    this._primaryKey = this.definePrimaryKey() || 'id'
  }

  defineTable () {
    throw new Error('No table Provided')
  }

  definePrimaryKey () {
    throw new Error('No PK Provided')
  }

  all () {
    return new Promise((resolve, reject) => {
      mysqlManager.query(`select * from ${this._table}`, function (err, result) {
        if (err) {
          return reject(err)
        }
        resolve(result)
      })
    })
  }

  find (id) {
    return new Promise((resolve, reject) => {
      console.log('SQL:', `select * from ${this._table} where ${this._primaryKey} = ${id}`)
      mysqlManager.query(`select * from ${this._table} where ${this._primaryKey} = ${id}`, function (err, result) {
        if (err) {
          reject(err)
        }
        if (!result || result.length <= 0) {
          return reject(new ModelNotFoundError('Model Not Foundssssssssssss'))
        }
        resolve(result[0])
      })
    })
  }
}

module.exports = EntityModel
