// var
var pi = 3.141592;
console.log(pi);


// everything is inside a main function
// intepreter take the pi2 and declare it on scope ( main func) and initializes with undefined
console.log(pi2); //undefined
var pi2 = 3.1415
var pi2 = 3;
console.log(pi2);


if (true) {
  var pi3 = 3.1;
}
console.log(pi3);

(function () {
  test = 'test';
})();
console.log(test);

// error
// (function () {
//   var test = 'test';
// })();
// console.log(test);

// error
// (function () {
//   function test () {
//     var x = 1;
//   }
//   console.log(x);
// })()

(function () {
  var x = 'aaaaaaaaaaaaaaaaaaaaaaa';
  function test () {
    console.log(x);
  }
  test();
})()


// let
/**
 * block scope
 * allow reattr
 * deny redecla
 */

let pi4 = 3.1415;
console.log(pi4);

// error
// console.log(pi5)
// let pi5 = 3.14

pi4 = 3;
console.log(pi4);

if (true) {
  let pi6 = 10;
}

// error pi6 only exists inside if block
//console.log(pi6)


// const
// equals let but deny reattr

const pi7 = 3.1415;
console.log(pi7);

// error
// console.log(pi8)
// const pi8 = 3.14

// error
// pi7 = 3;
// console.log(pi7);

// error
// if (true) {
//   const pi10 = 10;
// }

// console.log(pi10)


/** the interest thing about let and const is that they set restrictions on variable declaration */


