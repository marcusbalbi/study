const mongoose = require('mongoose')

 mongoose.Promise = global.Promise

before(() => {
    mongoose.connect('mongodb://localhost/users_test', {
      useMongoClient: true
    })
      mongoose.connection
        .once('open', () => { })
        .on('error', (error) => {
          console.warn('Error', error)
        })
})
beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done()
      })
    })
  })
})
