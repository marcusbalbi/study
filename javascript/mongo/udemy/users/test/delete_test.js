const assert = require('assert')
const User = require('../src/models/User')
describe('removing users of a database', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: 'joe' })
    joe.save().then(() => {
      done()
    })
  })
  it('instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })
  it('class remove', (done) => {
    User.remove({ name: 'joe' })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })
  it('class findAndRemove', (done) => {
    User.findOneAndRemove({ name: 'joe' })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })
  it('class findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })
})
