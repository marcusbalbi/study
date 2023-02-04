// const circle2 = new Circle(); // error should init after class def
// const square2 = new Square(); // error classes não sofrem hoisting

class Shape {
  toString() {
    return `area: ${this.calculateArea()}`
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side= side;
  }

  calculateArea() {
    return Math.pow(this.side, 2)
  }

  toString() {
    return `side: ${this.side}, ${super.toString()} }`
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}


const Circle = class extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  toString() {
    return `Radius: ${this.radius}, ${super.toString()}`;
  }
  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
};

console.log(Square, Circle);
console.log(typeof Square);
console.log(typeof Circle);

const square = new Square(4);
const square2 = Square.fromArea(16);

console.log(square.toString());
console.log(square.calculateArea());

console.log(square2.toString())


console.log("===========================")
const circle = new Circle(10);
const circle2 = Circle.fromArea(circle.calculateArea());

console.log(circle.toString());
console.log(circle2.toString());