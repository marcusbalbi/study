const User = require('../models/User')
const EncryptPassword = require('./EncryptPassword')

module.exports = ({email, password}) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      email,
      password: EncryptPassword(password)
    }).then((pResult) => {
      resolve(pResult)
    }).catch((pErr) => {
      reject(pErr)
    })
  })
}
