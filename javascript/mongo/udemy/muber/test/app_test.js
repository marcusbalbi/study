const assert = require('assert');
const request = require('supertest');
const app = require('../app')
describe('The Express App', () => {
  it('should handle /api GET request', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        assert(res.body.hi === 'there');
        done()
      })
  })
})
