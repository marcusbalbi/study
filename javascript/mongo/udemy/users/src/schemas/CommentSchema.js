const Schema = require('mongoose').Schema

const CommentSchema = new Schema({
  body: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
})

module.exports = CommentSchema
