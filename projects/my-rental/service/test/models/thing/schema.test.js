const ThingSchema = require('../../../src/models/schemas/Thing')
const expect = require('expect.js')

describe('test if ThingSchema is correct', () => {
  it('should have correct schema', () => {
    expect(ThingSchema.obj).to.have.keys(['description', 'type', 'purchaseDate'])
  })
})