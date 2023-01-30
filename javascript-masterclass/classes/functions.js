console.log(sum)
console.log(sum(2,2))
function sum(num1, num2) { // declaration works even if declared later hoisting
  return num1+num2;
}


const sum2 = function (num1, num2) { //expression respect order
  return num1 + num2
}

console.log(sum2);
console.log(sum2(4,4))


const subtract = function (a, b) {
  return a-b;
}

console.log(subtract(2,2));


const calculator = function (fn) {
  return function (a, b) {
    return fn(a, b)
  }
};

console.log(calculator)
console.log(calculator(sum))
console.log(calculator(sum)(2,2))
console.log(calculator(subtract)(2,2));


function sum3(a, b) {
  return a + b;
}

console.log(sum3(4))
console.log(sum3(2,2,2));


function sum4(a = 1, b = 1) {
  return a + b;
}

console.log(sum4())
console.log(sum4(4))
console.log(sum3(2,2,2))

console.log("===========================================")

function sum5() {
  let total = 0;
  for(const n in arguments) {
    total += parseInt(arguments[n]);
  }
  return total;
}

console.log(sum5());
console.log(sum5(4));
console.log(sum5(2, 2, 2));

console.log("===========================================")

function sum6(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += parseInt(n);
  }
  return total;
}

console.log(sum6());
console.log(sum6(4));
console.log(sum6(2, 2, 2));