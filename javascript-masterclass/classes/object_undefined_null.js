const book = {
  title: "Clean code",
  author: "Robert Martin",
  pages: 464,
  language: "english",
  available: true,
  kindle_version: null,
  test: undefined,
  price: null,
};

console.log('publisher', book.publisher);
console.log('publisher', 'publisher' in book);
console.log('title', 'title' in book);
console.log("kindle_version", "kindle_version" in book);
console.log("kindle_version", "kindle_version" in book);
console.log("test", "test" in book);
console.log("price", "price" in book);

delete book.test;
console.log(book);
