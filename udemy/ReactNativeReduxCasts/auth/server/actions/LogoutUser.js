const User = require('../models/User')
const EncryptPassword = require('./EncryptPassword')

module.exports = (userID) => {
  return new Promise((resolve, reject) => {
    User.findById(userID).then((pResult) => {
      resolve(pResult)
    }).catch((pErr) => {
      reject(pErr)
    })
  })
}
