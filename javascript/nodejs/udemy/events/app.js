const events = require('./config').events
const Emmitter = require('events')

const emit = new Emmitter()

emit.on(events.GREET, function (a) {
  console.log('GREEEET', a)
})

emit.emit(events.GREET, 'Bom dia!')
