const ws = new WeakSet();
console.log(ws)
const obj1 = { }
const obj2 = { }
ws.add(obj1)
ws.add(obj2)
ws.add(obj2)

console.log(ws);
console.log(ws.has(obj1))
console.log(ws.has(obj2))
console.log(ws.delete(obj2))
console.log(ws.has(obj2))
console.log(Array.from(ws)); // []

const circles = new WeakSet();
function Circle (radius) {
  circles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  if(!circles.has(this)) {
    throw "Invalid object"
  }
  return Math.PI * Math.pow(this.radius, 2);
}

const circle1 = new Circle(10);
const circle2 = {
  radius: 5
}

console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
