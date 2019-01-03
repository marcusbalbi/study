const request = require('supertest')
const faker = require('faker')
const app = require('../../app')
const CreateUser = require('../../actions/CreateUser')

describe('Login Api', () => {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(8)
  }
  beforeAll((done) => {
    CreateUser(user).then(() => done()).catch(() => done())
  })
  it('should login', (done) => {
    request(app).post('/login')
    .send(user)
    .then((pRes) => {
      expect(pRes.body.data).toBeDefined()
      expect(pRes.body.data.email).toBe(user.email)
      done()
    })
  })
  it('should not login', (done) => {
    request(app).post('/login')
      .send({ email: 'wrongemail@gmail.com', password: 'abc123s' })
      .then((pRes) => {
        expect(pRes.body.data).toBeDefined()
        expect(pRes.body.data).toBeNull()
        done()
      })
  })
})