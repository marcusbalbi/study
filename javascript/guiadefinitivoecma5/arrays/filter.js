var numbers = [0, 1, 2, 3, 4, 5, 6, 7];

var onlyOddNumbers = numbers.filter((item) => {
  return item % 2 !== 0
})

console.log('ONLY ODD NUMBERS', onlyOddNumbers);

console.log('ONLY NUMBERS GREATER THAN 3', numbers.filter(function (item) {
  return item > 3
}));
