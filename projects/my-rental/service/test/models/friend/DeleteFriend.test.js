const { Friend } = require('../../../src/models')
const expect = require('expect.js')
describe('detele a Friend', () => {
  let friend = null
  before((done) => {
    friend = new Friend({ name: 'Julio' })
    friend.save().then((a) => {
      done()
    })
  })

  it('should delete a friend', (done) => {
    Friend.findByIdAndRemove(friend._id)
      .then(Friend.findById(friend._id))
      .then((deletedFriend) => {
        expect(deletedFriend).to.be.equal(null)
        done()
      })
  })
})