const mongoose = require('mongoose')
mongoose.Promise = Promise;
const models = require('../src/models')
before((done) => {
  mongoose.connect('mongodb://localhost/myrentals_test', { useMongoClient: true })
    .once('open', () => {
      console.log('we are connected to the database');
      done()
    })
    .on('error', (pError) => { console.warn('some error occurred', pError) })
})

beforeEach((done) => {
  mongoose.connection.collections.friends
  .drop()
    .then(mongoose.connection.collections.rentals.drop)
    .then(mongoose.connection.collections.things.drop)
    .then(() => done())
    .catch((err) => done())
})