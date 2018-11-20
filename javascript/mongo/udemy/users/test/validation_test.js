const assert = require('assert')
const User = require('../src/models/User')
describe('validates a user', () => {
  it('should not create a user without a name', () => {
    const user = new User({ name: undefined })
    const validation = user.validateSync()
    const {name} = validation.errors
    assert(name.message.includes('Name is required') === true)
  })

  it('should not create a user wihe name less than 2 chars', (done) => {
    const user = new User({ name: 'Al' })
    const validation = user.validateSync()
    const {name} = validation.errors
    assert(name.message.includes('Name must be longer than 2 characters') === true)
    done()
  })
  it('disallows invalid records from being saved',(done) => {
    User.create({ name: 'EE', postCount: 2 }).catch((pErr) => {
      assert(pErr.errors.name !== undefined)
      done()
    })
  })
})
