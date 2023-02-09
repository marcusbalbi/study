function* forever() {
  let value = 1;
  while (true) {
    try {
      const reset = yield value++;
      if (reset) {
        value = 1;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGen = forever();
console.log(foreverGen);
console.log(typeof foreverGen);
console.log(Object.getOwnPropertyNames(foreverGen.__proto__.__proto__));
console.log(foreverGen.next());
console.log(foreverGen.next());
console.log(foreverGen.next(true));
console.log(foreverGen.next());
console.log(foreverGen.next());
console.log(foreverGen.next());
// console.log(foreverGen.return('end'))
console.log(foreverGen.throw("errr"));
console.log(foreverGen.next());
today();

console.log("=========================================================");

// function createIterable (...array) {
//   return {
//     [Symbol.iterator]() {
//       let i = 0;
//       return {
//         next() {
//           if (i < array.length) {
//             return {
//               value: array[i++],
//               done: false,
//             }
//           } else {
//             return {
//               value: undefined,
//               done:true
//             }
//           }
//         }
//       }
//     }
//   }
// }

function createIterable(...array) {
  return {
    *[Symbol.iterator]() {
      let i = 0;
      while (i < array.length) {
        yield array[i++];
      }
    },
  };
}

const languages = createIterable("Fortran", "Scheme", "Javascript", "Clojure");

for (let lang of languages) {
  console.log(lang);
}

console.log("=========================================");

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function async (fn) {
  const gen = fn();
  asyncR(gen);
}

function asyncR (gen, result) {
  const obj = gen.next(result);
  if(obj.done)  return;
  obj.value.then(function (result) {
    asyncR(gen, result)
  })

}

async(function* () {
  const a = yield sum(2,2);
  const b = yield sum(4,4);
  const result = yield sum(a, b);
  console.log(result);
})