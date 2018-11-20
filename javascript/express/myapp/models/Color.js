const EntityModel = require('../database/EntityModel')
class Color extends EntityModel {
  defineTable () {
    return 'colors'
  }

  definePrimaryKey () {
    return 'id'
  }
}
module.exports = new Color()
