
// like declared functions
function sayHello () {
  //  this is the global or undefined
  console.log('Hello world!');
}

// like a method
let object = {
  label: 'Hello World',
  sayHello: function () {
    // this is the context of the object
    console.log(this.label)
  }
}

function contructorFunction () {
  this.sayHello = function () {
    console.log('Hello World');
  }
}

sayHello()
object.sayHello()
let a = new contructorFunction()
a.sayHello()
// passing the new Context to the function
object.sayHello.call({ label: 'Salut!' })