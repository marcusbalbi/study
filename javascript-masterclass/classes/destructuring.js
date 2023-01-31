const language = "C;Dennis Ritchie;1972";

const data = language.split(';');
const [name = '-',author = '-', year = '-', paradigm = 'none'] = data;
console.log(author, year, paradigm);

const person = {
  name: 'Josh',
  city: 'Rio de Janeiro',
  year: 1987
}

const {name: personName, lastName = 'Doe'} = person;
console.log(personName);
console.log(lastName);