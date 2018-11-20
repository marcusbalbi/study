function printObject (o) {
  for(var p in o) {
    console.log('the value is ' + o[p] + ' and the key is ' + p)
  }
}

printObject({ name: 'jhon', age: 12 })

function distance (x1, x2, y1, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy)
}

console.log('the distance is: ', distance(10, 12, 5, 13));

function factorial(x) {
  if (x <= 1) {
    return 1
  }
  return x * factorial(x -1);
}

console.log('the factorial of 5 is ', factorial(5))