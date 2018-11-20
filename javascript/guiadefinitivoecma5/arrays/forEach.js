var numbers = [0, 1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (item, idx, array) { array[idx] = item + 2; })

console.log('increment numbers on 2', numbers);

var sum = 0;

numbers.forEach(function (item) {
  sum += item
})

console.log('The SUM IS: ', sum);
