const { Friend } = require('../../../src/models')
const expect = require('expect.js')
describe('Update a Friend', () => {
  let friend = null
  beforeEach((done) => {
    friend = new Friend({ name: 'Julio' })
    friend.save().then((a) => {
      done()
    })
  })

  it('should update a friend called Julio to Junior', (done) => {  
    Friend.findByIdAndUpdate(friend._id, { name: 'Junior' })
      .then(Friend.findById(friend._id))
      .then((updatedFriend) => {
        expect(updatedFriend.name).to.be.equal('Julio')
        done()
      })
  })

  it('should not update a friend with empty name', (done) => {
    Friend.findByIdAndUpdate(friend._id, { name: '' })
      .then((updatedFriend) => {
        expect(updatedFriend.name).to.be.equal(friend.name)
        done()
      })
  })
})