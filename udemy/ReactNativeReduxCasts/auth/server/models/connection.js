const mongoose = require('mongoose')

module.exports = async (databaseName = 'reactnative_auth') => {
  return await mongoose.connect('mongodb://127.0.0.1:27017/' + databaseName, {
    useNewUrlParser: true
  })
}