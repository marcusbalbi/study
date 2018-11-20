let greet = require('./greet')
let Person = function (name, lastName) {
  return {
    name: name,
    lastname: lastName,
    greet: function () {
      return greet(`My name is ${this.name} ${this.lastname}`)
    }
  }
}

module.exports = Person
