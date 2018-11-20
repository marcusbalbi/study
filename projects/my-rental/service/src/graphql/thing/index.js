const search = require('./queries/search')
const find = require('./queries/find')

module.exports = {
  queries: {
    things: search,
    thing: find
  },
  mutations: {

  }
}