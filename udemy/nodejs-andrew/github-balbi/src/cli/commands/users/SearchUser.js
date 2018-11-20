const SearchUser = require('../../../business/users/SearchUsers')
const chalk = require('chalk')
module.exports = {
  name: 'suser',
  handler: (arg) => {
    SearchUser(arg).then((pRes) => {
      pRes.items.forEach((item) => {
        console.log({
          name: item.login,
          id: item.id,
          score: item.score
        })
      })
    }).catch((pErr) => {
      console.log(pErr)
    })
  }
}