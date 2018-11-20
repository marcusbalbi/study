const Schema = require('mongoose').Schema

const BlogPostSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
})
module.exports = BlogPostSchema
