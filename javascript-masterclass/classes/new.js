const person = {
  name: "Jhon",
  city: "New York",
  year: 1969,
  get age() {
    const today = new Date();
    return today.getFullYear() - this.year;
  },
};
const person2 = {
  name: "Bill",
  city: "Astin",
  year: 1955,
  get age() {
    const today = new Date();
    return today.getFullYear() - this.year;
  },
};

console.log(person);
console.log(person.age);

console.log(person2);
console.log(person2.age);

const createPerson = function (name, city, year) {
  return {
    name,
    city,
    year,
    get age() {
      const today = new Date();
      return today.getFullYear() - this.year;
    },
  };
};

const person3 = createPerson("Jane", 'Brasilia', 1976)

console.log(person3)
console.log(person3.age)


function Person (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year; 
}

Person.prototype.getAge = function () {
    const today = new Date();
    return today.getFullYear() - this.year;
}

const person4 = new Person('Marcus', 'Belem', 1987);

console.log(person4)
console.log(person4.getAge())



const _new = function(fn, ...params) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype)
  fn.apply(obj, params);
  return obj;
}

console.log(_new(Person, "Jonas", 'Bom Jardim', 1944));