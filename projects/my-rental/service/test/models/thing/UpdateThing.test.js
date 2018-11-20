const { Thing } = require('../../../src/models')
const expect = require('expect.js')
describe('Update a Thing', () => {
  let book = null
  beforeEach((done) => {
    book = new Thing({ description: 'Code Complete', type: 'Book', purchaseDate: new Date() })
    book.save().then((a) => {
      done()
    })
  })

  it('should update a thing purchaseDate', (done) => {
    Thing.update({ _id: book._id }, { purchaseDate: '2016-01-01' })
      .then(() => Thing.findById(book._id))
      .then((updatedBook) => {
        expect(updatedBook.purchaseDate.toString()).to.be.equal(new Date('2016-01-01').toString())
        done()
      })
  })
})