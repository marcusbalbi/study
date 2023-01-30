const functionalLanguage = {
  paradigm: 'Functional'
}
const scheme = {
  name: 'scheme',
  year: 1975,
  __proto__: functionalLanguage
};

const javascript = {
  name: "javascript",
  year: 1995,
  __proto__: functionalLanguage,
};

console.log(functionalLanguage);
console.log(scheme);
console.log(scheme.paradigm);
console.log(javascript);
console.log(javascript.paradigm);


for (let k in scheme) {
  console.log(k, scheme.hasOwnProperty(k), k in scheme);
}

const clojure = {
  name: 'Clojure',
  year: 2007
}

console.log(Object.getPrototypeOf(clojure));
console.log(Object.setPrototypeOf(clojure,functionalLanguage));
console.log(Object.getPrototypeOf(functionalLanguage));
console.log(clojure.paradigm);


const lisp = Object.create(functionalLanguage);

console.log(lisp.__proto__);
console.log(Object.getPrototypeOf(lisp));
lisp.name = 'lisp';
lisp.year = 1958;
console.log(lisp);

lisp.paradigm = 'true Functional'; // shadowing
console.log(lisp.paradigm);
console.log(lisp.__proto__.paradigm);