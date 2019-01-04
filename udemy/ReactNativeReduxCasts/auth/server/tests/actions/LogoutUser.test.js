const faker = require('faker')
const LogoutUser = require('../../actions/LogoutUser')
const CreateUser = require('../../actions/CreateUser')
const connection = require('../../models/connection')
const { ObjectID } = require('mongoose').mongo

describe('LogoutUser test', () => {
  let user = {
    email: faker.internet.email(),
    password: faker.internet.password(8)
  }
  beforeAll((done) => {
    connection('test_react_native').then(() => {
      CreateUser(user).then((pUser) => { user = pUser; done() }).catch(() => done())
    }).catch(() => done())
  })
  it('should login a correct User', (done) => {
    LogoutUser(user._id)
      .then((pRes) => {
        expect(pRes).toBeTruthy()
        done()
      })
  })
  it('should not login a user with incorrect credentials', (done) => {
    const userID = new ObjectID()
    LogoutUser(userID).then((pRes) => {
      expect(pRes).toBeFalsy()
      done()
    })
  })

})
