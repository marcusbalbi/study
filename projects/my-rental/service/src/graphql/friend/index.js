const search = require('./queries/search')
const find = require('./queries/find')

module.exports = {
  queries: {
    friends: search,
    friend: find
  },
  mutations: {
    
  }
}