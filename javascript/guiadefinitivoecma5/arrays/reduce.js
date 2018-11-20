var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log('SUM ALL NUMBERS', numbers.reduce(function (sum, next) {
  return sum + next
}));


console.log('SUM ONLY EVEN NUMBERS', numbers.reduce(function (sum, next) {
  if (next % 2 === 0) {
    return sum + next
  }
  return sum;
}));

console.log('SUM ALL NUMBERS STARTING WITH -10 :\n', numbers.reduce(function (sum, next) {
  return sum + next
}, -10));
