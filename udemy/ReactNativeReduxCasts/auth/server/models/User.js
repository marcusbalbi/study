const mongoose = require('mongoose')


module.exports = mongoose.model('users', {
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
})
