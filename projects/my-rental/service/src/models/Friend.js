const mongoose = require('mongoose')
const FriendSchema = require('./schemas/Friend')

const Model = mongoose.model('friends', FriendSchema)

module.exports = Model