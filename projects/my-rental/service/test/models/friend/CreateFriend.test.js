const { Friend } = require('../../../src/models')
const expect = require('expect.js')
describe('Create a new Friend', () => {
  it('should create a friend called Fagner', (done) => {
    const fagner = new Friend({ name: 'Fagner' })
    fagner.save().then((a) => {
      expect(fagner.name).to.be.equal(a.name)
      done()
    })
  })

  it('should not create a friend without a name', (done) => {
    const fagner = new Friend({ name: '' })
    fagner.save()
      .then(() => {
        done(new Error('Should not create a friend without name'))
      })
      .catch((err) => {
        expect(err.errors).to.be.an('object')
        done()
      })
  })
})