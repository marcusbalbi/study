const FriendSchema = require('../../../src/models/schemas/Friend')
const expect = require('expect.js')

describe('test if FriendSchema is correct', () => {
  it('should have correct schema', () => {
    expect(FriendSchema.obj).to.have.keys(['name'])
  })
})