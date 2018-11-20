const Schema = require('mongoose').Schema
const mongoose = require('mongoose')
const PostSchema = require('./PostSchema')
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => {
        return name.length > 2
      },
      message: 'Name must be longer than 2 characters'
    },
    required: [true, 'Name is required!']
  },
  posts: [PostSchema],
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'BlogPosts'
  }],
  likes: Number
})

UserSchema.virtual('postCount').get(function () {
  return this.posts.length
})

UserSchema.pre('remove', function (next) {
  const BlogPosts = mongoose.model('BlogPosts')
  BlogPosts.remove({ _id: { $in: this.blogPosts } })
    .then(() => next())
})

module.exports = UserSchema
