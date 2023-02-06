import { PI, pow } from './math.mjs';

export default class Circle {
  constructor (radius) {
    this.radius = radius
  }

  get area() {
    return PI * pow(this.radius, 2);
  }
}