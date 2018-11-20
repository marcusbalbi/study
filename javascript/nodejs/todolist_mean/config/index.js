const config = require('./config.json')

module.exports = {
  getDbConnectionString: function () {
    // return `mongodb://${config.database.username}:${config.database.password}@ds141454.mlab.com:41454/todosample`
    return `mongodb://${config.database.username}:${config.database.password}@localhost:27017/todosample`
  }
}
