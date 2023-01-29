const p = {};
const ob = new Object();
const ob2 = Object.create(null);
console.log(p, ob, ob2);

const title = "Clean code"
const book = {
  title,
  author: 'Robert Martin',
  pages: 464,
  language: 'english',
  available: true
};

console.log(book);


const book2 = {
  if: true,
  while: "teste",
  'number-of-pages': 464,
  new: "english",
  10: "ssdas",
  0xff: "sss"
};

console.log(book2);


const key1 = 'title';
const key2 = 'auhtor';
const key3 = 'pages';
const key4 = 'available';
const key5 = 'language';

const book3 = {
  [key1]: 'Clean code',
  [key2]: 'Robert Martin',
  [key3]: 450,
  [key4]: true,
  [key5]: 'english',
}

console.log(book3);

const book4 = {};

book4.title = 'Clean code';
book4.author = 'Uncle Bob';
book4.pages = 460;
book4.language = 'english';
book4[key4] = true

console.log(book4);
console.log(book4.author)
console.log(book4.language)
console.log(book4.pages)

for (const key in book4) {
  console.log("show in value", key, book[key]);
}

const bookCopy = {};
for (const key in book4) {
  bookCopy[key] = book4[key]
}

console.log('bookCOpy', bookCopy)