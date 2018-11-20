const Emitter = require('events')
const utils = require('util')
function GreetEmitter () {
  // Emitter.call(this)
  this.greeting = 'hello world'
}

GreetEmitter.prototype.greet = function () {
  console.log(this.greeting)
  this.emit('greet', { greet: this.greeting })
}
utils.inherits(GreetEmitter, Emitter)

let p = new GreetEmitter()

p.on('greet', function (data) {
  console.log('someone greeted !', data)
})
p.greet()
