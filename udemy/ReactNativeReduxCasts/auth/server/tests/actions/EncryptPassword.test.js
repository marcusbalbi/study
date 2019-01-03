const EncryptPassoword = require('../../actions/EncryptPassword')

describe('EncryptPassword test', () => {
  it('should encrypt a password', () => {
    const encryptedPassword = EncryptPassoword('abcd1234')

    expect(encryptedPassword).not.toEqual('abcd1234')
    expect(encryptedPassword).toEqual('7ce0359f12857f2a90c7de465f40a95f01cb5da9')
    expect(encryptedPassword.length).toEqual(40)
  })
})
