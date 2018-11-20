const { Thing } = require('../../../src/models')
const expect = require('expect.js')
describe('Create a new Thing', () => {
  it('should create a Thing called code complete book', (done) => {
    const book = new Thing({ description: 'code complete book', type: 'Book', purchaseDate: new Date() })
    book.save().then((a) => {
      expect(book.description).to.be.equal(a.description)
      expect(book.type).to.be.equal(a.type)
      expect(book.purchaseDate).to.be.equal(a.purchaseDate)
      done()
    })
  })

  it('should not create a Thing without a descriptions', (done) => {
    const book = new Thing({ description: '', type: 'Book' })
    book.save()
      .then(() => {
        done(new Error('Should not create a Thing without name'))
      })
      .catch((err) => {
        expect(err.errors).to.be.an('object')
        done()
      })
  })
})