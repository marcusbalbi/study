const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(typeof date);

function Person(name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
}

Person.prototype.getAge = function () {
  const today = new Date();
  return today.getFullYear() - this.year;
};

const person = new Person('Jhon', 'New Orleans', 1955);
console.log(person instanceof Person);
console.log(person instanceof Date);


const _instanceOf = function (obj, fn) {
  if(obj === fn.prototype) return true;
  if (obj === null) return false;
  return _instanceOf(obj.__proto__, fn);
}

const date2 = new Date();
console.log(_instanceOf(date2, Date));
console.log(_instanceOf(date2, Object));
console.log(_instanceOf(person, Person));