const request = require('supertest')
const faker = require('faker')
const app = require('../../app')

describe('Login Api', () => {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(8)
  }
  it('should create user', (done) => {
    request(app).post('/users')
      .send(user)
      .then((pRes) => {
        expect(pRes.body.data).toBeDefined()
        expect(pRes.body.data.email).toBe(user.email)
        done()
      })
  })
  it('should not create user', (done) => {
    request(app).post('/users')
      .send({ email: 'wrongemail@gmail.com', password: '' })
      .then((pRes) => {
        expect(pRes.body.error).toBeDefined()
        done()
      })
  })
})