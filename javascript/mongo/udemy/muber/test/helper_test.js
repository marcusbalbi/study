const mongoose = require('mongoose')
before((done) => {
  mongoose.connect('mongodb://localhost/muber_test', { useMongoClient: true })
    .once('open', () => {
      console.log('we are connected to the database');
      done()
    })
    .on('error', (pError) => { console.warn('some error occurred', pError) })
})

beforeEach((done) => {
  mongoose.connection.collections.drivers.drop()
    .then(() => { mongoose.connection.collections.drivers.createIndex({ 'geometry.coordinates': '2dsphere' }) })
    .then(() => done())
    .catch(() => done())
})
