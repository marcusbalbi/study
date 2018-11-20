const assert = require('assert')
const User = require('../src/models/User')
describe('Creating records', () => {
    it('saves a user', (done) => {
    let marcus = new User({ name: 'Marcus' })
    marcus.save().then(() => {
      assert(marcus.isNew === false)
      done()
    })
  })
})
