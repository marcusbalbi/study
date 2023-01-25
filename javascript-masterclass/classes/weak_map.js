// weakmap

const wm = new WeakMap();
console.log(wm)

const obj1 = {}
const obj2 = {}

wm.set(obj1, "123");
wm.set(obj2, '321');
console.log(wm)
console.log(wm.has(obj1))
console.log(wm.get(obj2))

console.log(wm.delete(obj1));

let obj3 = {};
wm.set(obj3, 'obj3');


console.log(wm.has(obj3));
obj3 = {};

console.log(wm.has(obj3));


const areas = new WeakMap();

const rectangle1 = {
  x: 10,
  y: 2
}
const rectangle2 = {
  x: 5,
  y: 3
}

function calculate(rectangle) {
  if (areas.has(rectangle)) {
    console.log("already calculated", rectangle);
    return areas.get(rectangle);
  }
  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area);
  return area;
}

console.log(calculate(rectangle1))
console.log(calculate(rectangle1))
console.log(calculate(rectangle2))
