
function Rectangle (x, y) {
  this.x = x;
  this.y = y;
  this.calculateArea = function () {
    if (this.x > 0 && this.y > 0) {
      return this.x * this.y;
    }
    throw "Invalid Error for x or y"
  }
}

const rectangle = new Rectangle(10, 2);
console.log(rectangle.calculateArea())


try {

const rectangle2 = new Rectangle(-10, -2);
console.log(rectangle2.calculateArea());
} catch (e) {
  console.log(e);
}