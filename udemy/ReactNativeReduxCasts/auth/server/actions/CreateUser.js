const User = require('../models/User')
const EncryptPassword = require('./EncryptPassword')

module.exports = ({ email, password }) => {
  try {
    return User.create({
      email,
      password: EncryptPassword(password)
    })
  } catch(pErr) {
    return Promise.reject(pErr)
  }
}