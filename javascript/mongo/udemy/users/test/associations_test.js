const mongoose = require('mongoose')
const User = require('../src/models/User')
const Comment = require('../src/models/Comment')
const BlogPost = require('../src/models/BlogPost')
const assert = require('assert')
describe('associations', () => {
  let joe, blogPost, comment
  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    blogPost = new BlogPost({ title: 'JS is great!', body: 'it really is!' })
    comment = new Comment({ body: 'yes it is!' })
    joe.blogPosts.push(blogPost)
    blogPost.comments.push(comment)
    comment.user = joe
    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => {
        done()
      })
  })

  it('saves a relation with user and blogPost', (done) => {
    User.findOne({ name: 'Joe' })
      .populate('blogPosts')
      .then((user) => {
        assert(user.blogPosts[0].title === blogPost.title)
        done()
      })
  })

  it('saves a full relations graph', (done) => {
    User.findOne({ name: 'Joe' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'Comments',
          populate: {
            path: 'user',
            model:'Users'
          }
        }
      }).then((user) => {
        assert(user.name === joe.name)
        assert(user.blogPosts[0].title === blogPost.title)
        assert(user.blogPosts[0].comments[0].body === comment.body)
        assert(user.blogPosts[0].comments[0].user.name === user.name)
        done()
      })
  })
})
