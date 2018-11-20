const assert = require('assert')
const User = require('../src/models/User')
const BlogPost = require('../src/models/BlogPost')

describe('Middleware', () => {
  let joe, blogPost
  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    blogPost = new BlogPost({ title: 'JS is great!', body: 'it really is!' })
    joe.blogPosts.push(blogPost)
    Promise.all([joe.save(), blogPost.save()])
      .then(() => {
        done()
      })
  })

  it('should remove blogposts when a user is removed!', (done) => {
    joe.remove()
    .then(() => BlogPost.count())
    .then((count) => {
      assert(count === 0)
      done()
    })
  })
})
