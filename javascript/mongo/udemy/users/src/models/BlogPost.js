const BlogPostSchema  = require('../schemas/BlogPostSchema')
const mongoose = require('mongoose')

const BlogPostModel = mongoose.model('BlogPosts', BlogPostSchema)

module.exports = BlogPostModel
