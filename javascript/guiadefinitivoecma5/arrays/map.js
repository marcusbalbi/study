var numbers = [0, 1, 2, 3, 4, 5, 6, 7];

var newNumbersTimes2 = numbers.map(function (item) {
  return item * 2
})

console.log('NUMBERS TIMES 2', numbers, newNumbersTimes2);

var onlyEvenNumbersPlus2 = numbers.map(function (item) {
  if (item % 2 === 0) {
    return item + 2
  }
  return item
})

console.log('ONLY EVEN NUMBERS PLUS 2', numbers, onlyEvenNumbersPlus2);
