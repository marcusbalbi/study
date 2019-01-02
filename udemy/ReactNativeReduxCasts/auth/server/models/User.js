const mongoose = require('mongoose')


module.exports = mongoose.model('users', {
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
})
