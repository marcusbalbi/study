// node classes/modules/index.mjs --input-type="modules"
// https://nodejs.org/api/esm.html#modules-ecmascript-modules
import Circle from './shapes.mjs';

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);