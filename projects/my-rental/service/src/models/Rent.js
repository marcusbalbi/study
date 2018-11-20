const mongoose = require('mongoose')
const RentSchema = require('./schemas/Rent')

const Model = mongoose.model('rentals', RentSchema)

module.exports = Model