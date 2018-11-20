const assert = require('assert')
const User = require('../src/models/User')

describe('Virtual types', () => {
  it('should update postCount correctly', (done) => {
    const user = new User({
      name: 'Jhon Doe',
      posts: [
        {title: 'My awsome post!'}
      ]
    })
    user.save()
      .then(() => User.findOne({ name: user.name }))
      .then((pUser) => {
        assert(pUser.postCount === 1)
        done()
      })
  })
})
