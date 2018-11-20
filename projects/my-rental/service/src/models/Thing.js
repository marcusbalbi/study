const mongoose = require('mongoose')
const ThingSchema = require('./schemas/Thing')

const Model = mongoose.model('things', ThingSchema)

module.exports = Model