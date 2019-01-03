const User = require('../models/User')
const EncryptPassword = require('./EncryptPassword')
const ValidateUser = require('./ValidateUser')

module.exports = ({ email, password }) => {
  try {
    if (ValidateUser({email, password})) {
      return User.create({
        email,
        password: EncryptPassword(password)
      })
    }
  } catch(pErr) {
    return Promise.reject(pErr)
  }
}