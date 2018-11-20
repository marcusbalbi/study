const mongoose = require('mongoose')
const UserSchema = require('../schemas/UserSchema')

const User = mongoose.model('Users', UserSchema)

module.exports = User
