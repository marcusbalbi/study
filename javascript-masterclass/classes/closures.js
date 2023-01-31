// function fn1 () {
//   const v1 = 10;
//   return () => {
//     console.log(v1);
//   }
// }

// const fn2 = fn1();
// const v1 = 100;
// fn2();


// var obj1 = {};
// for (var v1 = 0; v1 < 3; v1++) {
//   obj1[v1] = (function (v2) {
//     return function () {
//       console.log(v2);
//     };
//   })(v1);
// }
// obj1[0]();
// obj1[1]();
// obj1[2]();


var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(this.v2);
  }.bind({ v2: v1 });
}
obj1[0]();
obj1[1]();
obj1[2]();