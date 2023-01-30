
const rectangle = {
  x: 10,
  y: 2,
  calculateArea () {
    return this.x * this.y;
  }
};

console.log(rectangle, rectangle.calculateArea())

console.log('-----------------------------------')

const calculateArea = function () {
    return this.x * this.y;
  }
const rectangle2 = {
  x: 10,
  y: 2,
  calculateArea,
};

console.log(rectangle2.calculateArea());
