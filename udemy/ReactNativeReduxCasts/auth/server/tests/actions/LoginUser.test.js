const faker = require('faker')
const LoginUser = require('../../actions/LoginUser')
const CreateUser = require('../../actions/CreateUser')
const connection = require('../../models/connection')
describe('LoginUser test', () => {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(8)
  }
  beforeAll((done) => {
    connection('test_react_native').then(() => {
      CreateUser(user).then(() => done()).catch(() => done())
    }).catch(() => done())
  })
  it('should login a correct User', (done) => {
    LoginUser(user)
      .then((pRes) => {
        expect(pRes).toBeTruthy()
        done()
      })
  })
  it('should not login a user with incorrect credentials', (done) => {
    LoginUser({
      email: user.email,
      password: 'wrong'
    }).then((pRes) => {
      expect(pRes).toBeFalsy()
      done()
    })
  })
  it('should not login a user with empty credentials', (done) => {
    LoginUser({
      email: '',
      password: ''
    }).then((pRes) => {
      expect(pRes).toBeFalsy()
      done()
    })
  })
 

})
