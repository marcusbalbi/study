const rectangle = {
  x: 10,
  y: 2,
  get area () {
    return this.x * this.y;
  },
  set sideA (x) {
    if (x > 0) {
      this.x = x
    } else {
      console.log('Invalid valuefor SideA')
    }
  },
  set sideB (y) { // also possible with defineProperty
    if (y > 0) {
      this.y = y;
    } else {
      console.log("Invalid valuefor SideB");
    }
  }
};

console.log(rectangle);
console.log(rectangle.area);
rectangle.sideA = 20;
rectangle.sideB = 2;
console.log(rectangle.area)
rectangle.sideA = -12;
rectangle.sideB = -2;
console.log(rectangle.area)
