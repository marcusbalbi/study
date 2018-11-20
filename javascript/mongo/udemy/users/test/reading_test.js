const assert = require('assert')
const User = require('../src/models/User')
describe('Reading users of a database', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: 'joe' })
    joe.save().then(() => {
      done()
    })
  })
  it('find all users with name joe', (done) => {
    User.find({ name: 'joe' }).then((users) => {
      assert(users[0]._id.toString() === joe._id.toString())
      done()
    })
  })
  it('find one user with _id', (done) => {
    User.findOne({ _id: joe._id }).then((users) => {
      assert(users._id.toString() === joe._id.toString())
      done()
    })
  })
})
