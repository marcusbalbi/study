const languages = ["Clojure", "Java", "C++"];
console.log(languages);
console.log(typeof languages);
console.log(languages instanceof Array);

console.log("==========================")

const languages2 = new Array("javascript", 'c');
console.log(languages2);

console.log("==========================")

const languages3 = new Array(5);
console.log(languages3.fill('a'));
console.log(languages3.length);

console.log("==========================")

const languages4 = [];
languages4[0] = 'Rust'
languages4[1] = 'Go lang'
languages4[2] = 'Typescript'
console.log(languages4)
console.log(languages4.length)
delete languages4[1];
console.log(languages4)
console.log(languages4.length)


console.log("==========================")

const languages5 = [];
languages5[0] = 'Rust'
languages5[10] = 'Go lang'
languages5[20] = 'Typescript'
console.log(languages5)
console.log(languages5.length)


console.log("==========================")

const languages6 = ['Julia', 'Lua', 'PHP'];
console.log(languages6)
console.log(languages6.push('C#'));
console.log(languages6);
console.log(languages6.pop());
console.log(languages6);
console.log(languages6.shift());
console.log(languages6.unshift('C#'));



console.log("==========================");

const languages7 = ["Java", "PHP", "C++"];
console.log(languages7);
console.log(languages7.splice(1, 1));
console.log(languages7)
console.log(languages7.splice(1, 0, "PHP", "C#"));
console.log(languages7)
console.log(languages7.splice(1, 2, "F#"));
console.log(languages7);


console.log("==================================");

const languages8 = [
  { name: 'Pyhton', year: 1991},
  { name: 'C', year: 1972},
  { name: 'Java', year: 1995},
];

languages8.sort((a, b) => {
  return 0
});
console.log(languages8);
languages8.sort((a, b) => {
  return -1;
});
console.log(languages8);
languages8.sort((a, b) => {
  return 1;
});
console.log(languages8);


languages8.sort((a, b) => {
  return a.year - b.year;
});
console.log(languages8);

languages8.sort((a, b) => {
  return b.year - a.year;
});
console.log(languages8);

languages8.sort((a, b) => {
  return  a.name <= b.name ? -1 : 1;
});
console.log(languages8);

languages8.sort((a, b) => {
  return a.name >= b.name ? -1 : 1;
});
console.log(languages8);

languages8.sort((a, b) => {
  return a.name.localeCompare(b.name) //* -1;
});
console.log(languages8);


console.log("================================");

const languages9 = ['Clojure', 'F#', 'Erlang'];
console.log(languages9.reverse());
console.log(languages9);


console.log("================================");

const languages10 = new Array(25);
languages10.fill('javascript', 10);
console.log(languages10);

console.log("-----------------------------------------")
// iterators

const frameworks = ['Angular', 'Vue', 'React'];

frameworks.forEach(framework => console.log(framework));

console.log(frameworks.filter(f => f === 'Vue'));
console.log(frameworks.find(f => f === 'Angular'));

console.log(frameworks.some(f => f === 'Angular.JS'));
console.log(frameworks.some(f => f === 'React'));


console.log(frameworks.every(f => f.length > 3));
console.log(frameworks.every(f => f.length >= 3));


console.log(frameworks.map(f => `${f}.js`));


console.log(frameworks.reduce((total, f) => {
  return total + f.length
}, 0));



// array accessors api


console.log(frameworks.concat('Vue').lastIndexOf('Vue'))
console.log(frameworks.lastIndexOf('Vue'))
console.log(frameworks.lastIndexOf('aaa'))

console.log(frameworks.indexOf('Angular'))
console.log(frameworks.indexOf('aaa'))

console.log(frameworks.includes('React'))
console.log(frameworks.includes('Ember'))

console.log(frameworks.concat('Ember'));
console.log(frameworks);


console.log(frameworks.slice(1));
console.log(frameworks.slice(0, 2));
console.log(frameworks.join(';'));


