const Greet = function () {
  this.greetWord = "Hello! greet 3"
  this.greet = function () {
    console.log(this.greetWord)
  }
}

module.exports = new Greet()
