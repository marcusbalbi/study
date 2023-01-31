const sum = function(a,b) {
  return a + b;
}

const subtract = (a,b) => a - b;

const calculator = fn =>  (a,b) => fn(a,b);

console.log(calculator(sum)(2,2))
console.log(calculator((a, b) => a * b)(2,23));


const person = {
  name: 'Josh',
  city: 'Rio de Janeiro',
  year: 1955,
  getAge: () => {
      return (new Date().getFullYear() - this.year) // bug
  }
}

console.log(person);
console.log(person.getAge()); // this lost context NaN

const sum3 = () => { // rest paramater works
  console.log(arguments); // node args
  let total;
  for (const t in arguments) {
    total+=parseInt(t);
  }
  return total;
}

console.log(sum3(1,2,3,4,5,6));


const createPerson = (name, city, year) => ({ name, city, year });

console.log(createPerson("Alan", 'Boston', 1966));