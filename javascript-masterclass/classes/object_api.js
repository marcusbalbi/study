const javascript = Object.create({});

Object.assign(javascript, { name: 'javascript', paradigm: 'OO' }, { year: 1995, paradigm: 'OO and Functional' });
console.log(javascript);

console.log(Object.keys(javascript))
console.log(Object.entries(javascript))
console.log(Object.is(javascript, javascript))
console.log(Object.is(javascript, {}))
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));



const clojure = {};
Object.defineProperty(clojure, "name", { 
  value: 'Clojure',
  configurable: true,
  // enumerable: true,
  // writable: true,
});
console.log(clojure); // show only if enumerable
console.log(clojure.name);
console.log(Object.keys(clojure)); // show only if enumerable
console.log(Object.values(clojure)); // show only if enumerable
console.log(Object.entries(clojure)); // show only if enumerable

clojure.name = "Java"; // set only if writable
console.log(clojure.name);

delete clojure.name;
console.log(clojure.name); // only delete if configurable


const lisp = { name: 'lisp' }
Object.preventExtensions(lisp);
console.log(Object.isExtensible(lisp));
lisp.year = 1958;
console.log(lisp);

Object.seal(lisp);
console.log(Object.isSealed(lisp));
delete lisp.name;
console.log(lisp);

lisp.name = 'Lisp'
Object.freeze(lisp);
lisp.name = "lisp";
console.log(Object.isFrozen(lisp));
console.log(lisp);