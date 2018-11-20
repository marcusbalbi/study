const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ThingSchema = require('./Thing')
const FriendSchema = require('./Friend')
const RentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    default: null
  },
  friend: {
    type: FriendSchema
  },
  things: {
    type: [ThingSchema]
  }
})

module.exports = RentSchema