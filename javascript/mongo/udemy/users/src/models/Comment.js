const CommentSchema  = require('../schemas/CommentSchema')
const mongoose = require('mongoose')

const CommentModel = mongoose.model('Comments', CommentSchema)

module.exports = CommentModel
