const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FriendSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = FriendSchema