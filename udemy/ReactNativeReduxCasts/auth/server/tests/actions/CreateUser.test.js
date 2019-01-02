const CreateUser = require('../../actions/CreateUser')
const connection = require('../../models/connection')
const faker = require('faker')
describe('CreateUser test', () => {
  beforeAll((done) => {
    connection('test_react_native').then(() => {
      done()
    })
  })
  it('should create a user with correct data', (done) => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(8)
    }
    CreateUser(user)
    .then((pRes) => {
      expect(pRes.email).toEqual(user.email)
      expect(pRes.password).not.toEqual(user.password)
      done()
    })
    .catch((pErr) => done(pErr.message))
  })
  it('should not create a user with same email', (done) => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(8)
    }
    CreateUser(user).then(() => {
      // create same user
      CreateUser(user)
        .then(() => {
          done('Created a User with same email')
        })
        .catch((pErr) => {
          expect(pErr).toBeDefined()
          done()
        })
    })
  })
  it('should not create an empty user', (done) => {
    CreateUser({ password: faker.internet.password(8)})
      .then(() => { done('User should not be empty') })
      .catch((pErr) => { expect(pErr).toBeDefined(); done() })
  })
})