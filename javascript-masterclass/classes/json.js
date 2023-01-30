console.log(JSON.stringify(10))
console.log(JSON.stringify("javascript"));
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify({ name: 'java', paradigm: 'OO' }))
console.log(JSON.stringify([1,2,3,4,5,6,7,8,9,10]))
console.log(JSON.stringify(null))

console.log("=============================================")

console.log(JSON.parse('10'));
console.log(JSON.parse('"javascript"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('false'));
console.log(JSON.parse('{"name":"java","paradigm":"OO"}'));
console.log(JSON.parse('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'));
console.log(JSON.parse('null'));


console.log("====================================");

const book1 = {
  name: 'Refactoring',
  author: 'Martin Fowler'
}
const book2 = {
  name: 'Refactoring',
  author: 'Martin Fowler'
}

console.log(book1 === book2);
console.log(JSON.stringify(book1) === JSON.stringify(book2))

const book3 = {
  name: "Refactoring",
  author: "Martin Fowler",
};
const book4 = {
  author: "Martin Fowler",
  name: "Refactoring",
};

console.log(book3 === book4);
console.log(JSON.stringify(book3) === JSON.stringify(book4));

console.log("==================================")

const book5 = book4;
console.log(book5 === book4);
const book6 = JSON.parse(JSON.stringify(book4));
console.log(book6, book6 === book4)