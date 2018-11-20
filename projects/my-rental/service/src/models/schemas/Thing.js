const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThingSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'Point'
  },
  purchaseDate: {
    type: Date,
    default: null
  }
})

module.exports = ThingSchema