const assert = require('assert')
const User = require('../src/models/User')
describe('updating users of a database', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: 'joe', likes: 0 })
    joe.save().then(() => {
      done()
    })
  })

  function assertName (operation, name, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1)
        assert(users[0].name === name)
        done()
      })
  }

  it('instance update set /save', (done) => {
    joe.set('name', 'Alex');
    assertName(joe.save(), 'Alex', done)

  })
  it('instance update', (done) => {
    assertName(joe.update({ name: 'Alex' }), 'Alex', done)
  })
  it('a model class can upate', (done) => {
    assertName(
      User.update({ name: 'joe' }, { name: 'Alex' }),
      'Alex',
      done
    )
  })
  it('a model calss can findOneAndUpdate', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'joe' }, { name: 'Alex' }),
      'Alex',
      done
    )
  })
  it('a model class can findByIdAndUpdate', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
      'Alex',
      done
    )
  })
  it('should incremet postCount by one for each user', (done) => {
    User.update({ name: 'joe' }, { $inc: { likes: 1 } })
      .then((a) => User.findOne({name:'joe'}))
      .then((user) => {
        assert(user.likes === 1)
        done()
      })
  })
})
