const assert = require('assert')
const User = require('../src/models/User')

describe('Posts', () => {
  it('should create a user with a post', (done) => {
    const user = new User({
      name: 'Jhon Doe',
      posts: [
        {title: 'My awsome post!'}
      ]
    })
    user.save()
      .then(() => User.findOne({ name: user.name }))
      .then((pUser) => {
        assert(pUser.posts.length === 1)
        done()
      })
  })
  it('should add a post to existing user', (done) => {
    const user = new User({
      name: 'Joe',
      posts: []
    })
    user.save()
      .then(() => User.findOne({ name: user.name }))
      .then((pUser) => {
        pUser.posts.push({ title: 'ok save this is a post' })
        return pUser.save()
      })
      .then(() => User.findOne({ name: user.name }))
      .then((pUser2) => {
        assert(pUser2.posts[0].title === 'ok save this is a post')
        done()
      })
  })
  it('should remove subdocuments from user', (done) => {
    const jhon = new User({
      name: 'Jhon Doe',
      postCount: 1,
      posts: [
        {title: 'My awsome post!'}
      ]
    })
    jhon.save()
    .then(() => User.findOne({ name: jhon.name }))
    .then((user) => {
      user.posts[0].remove()
      return user.save()
    })
    .then(() => User.findOne({ name: jhon.name }))
    .then((user) => {
      assert(user.posts.length === 0)
      done()
    })
  })
})
