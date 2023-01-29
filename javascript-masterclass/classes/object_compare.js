const book1 = {
  title: "Clean code",
  author: "Robert Martin",
  pages: 464,
  language: "english",
  available: true
}
const book2 = {
  title: "Clean code",
  author: "Robert Martin",
  pages: 464,
  language: "english",
  available: true
}

console.log(book1 == book2);
console.log(book1 === book2);

let equal = true;

for (const key in book1) {
  if (book1[key] !== book2[key]) {
    equal = false;
    break;
  }
}
for (const key in book2) {
  if (book2[key] !== book1[key]) {
    equal = false;
    break;
  }
}

console.log('is equal', equal);
