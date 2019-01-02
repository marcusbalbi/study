const User = require('../models/User')
const crypto = require('crypto')
module.exports = ({ email, password }) => {
  try {
    return User.create({
      email,
      password: crypto.createHash('SHA1').update(password).digest('hex')
    })
  } catch(pErr) {
    return Promise.reject(pErr)
  }
}