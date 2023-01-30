function calculateArea (fn = (x) => x) {
    return fn(Math.PI * Math.pow(this.radius, 2));
  }
const circle = {
  radius: 10,
  calculateArea
}

const circle2 = {
  radius: 2,
}

console.log(circle.calculateArea());
console.log(calculateArea.apply(circle, [Math.round]));
console.log(calculateArea.call(circle2, Math.floor));

const calculateAreaForCircle2 = calculateArea.bind(circle2, Math.ceil);
console.log(calculateAreaForCircle2())