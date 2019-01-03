const crypto = require('crypto')

module.exports = (password) => {
  return crypto.createHash('SHA1').update(password).digest('hex')
}