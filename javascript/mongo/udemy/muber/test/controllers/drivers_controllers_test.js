const mongoose = require('mongoose')
const assert = require('assert');
const request = require('supertest');
const app = require('../../app')
const Driver = mongoose.model('driver')

describe('Drivers_Controller', () => {
    it('should post to /api/drivers', (done) => {
      Driver.count().then((pCount) => {
        request(app).post('/api/drivers')
          .send({ email: 'balbimarcus@gmail.com' })
          .end(() => {
            Driver.count().then((newCount) => {
              assert(pCount + 1 === newCount)
              done()
            })
          })
      });
    })
    it('should throw an error on post to /api/drivers', (done) => {
      request(app).post('/api/drivers')
        .send({})
        .end((pErr, pRes) => {
          assert(pRes.body.errors !== undefined)
          done()
        })
    })
    it('should update a driver', (done) => {
      const driver = new Driver({ email: 'blabla@test.com', driving: false })

      driver.save().then(() => {
        request(app).put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end((pErr, pRes) => {
          Driver.findById(driver._id).then((pDriver) => {
            assert(pDriver.driving === true)
            done()
          })
        })
      })
    })
    it('should delete a driver', (done) => {
      const driver = new Driver({ email: 'blabla@test.com', driving: false })
      driver.save().then(() => {
        request(app).delete(`/api/drivers/${driver._id}`)
          .end((pErr, pRes) => {
            Driver.findById(driver._id).then((pDriver) => {
              assert(pDriver === null)
              done()
            })
          })
      })
    })
    it('should get to /api/drivers', (done) => {
      const FriburgoDriver = new Driver({
        email: 'friburgo@test,com',
        geometry: {
          type: 'Point',
          coordinates: [-42.5340796, -22.2887261]
        }
      })
      const AcreDriver = new Driver({
        email: 'acre@test,com',
        geometry: {
          type: 'Point',
          coordinates: [-70.8119953, -9.0237964]
        }
      })

      Promise.all([FriburgoDriver.save(), AcreDriver.save()])
        .then((result) => {
          request(app).get('/api/drivers?lng=-70&lat=-9')
            .end((err, response) => {
              console.log(response.body)
              done()
            })
        })

    })
})