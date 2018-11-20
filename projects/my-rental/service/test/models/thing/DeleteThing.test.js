const { Thing } = require('../../../src/models')
const expect = require('expect.js')
describe('delete a Thing', () => {
  let thing = null
  before((done) => {
    thing = new Thing({ description: 'A book' })
    thing.save().then((a) => {
      done()
    })
  })

  it('should delete a thing', (done) => {
    Thing.remove({ _id: thing._id})
      .then(() => Thing.findById(thing._id))
      .then((deleted) => {
        expect(deleted).to.be.equal(null)
        done()
      })
  })
})