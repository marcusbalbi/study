function Car (name, color) {
  this.name = name
  this.color = color
}

Car.prototype.description = function () {
  return this.name + this.color
}

let p = new Car('Brasilia', 'Amarela')

console.log(Car.prototype);
