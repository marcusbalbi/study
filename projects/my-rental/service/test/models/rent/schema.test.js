const RentSchema = require('../../../src/models/schemas/Rent')
const expect = require('expect.js')

describe('test if RentSchema is correct', () => {
  it('should have correct schema', () => {
    expect(RentSchema.obj).to.have.keys(['date', 'friend', 'things'])
  })
})