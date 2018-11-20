
let numbers = [6, 12, 4, 2, 7, 9]

for (let i = numbers.length; i != 0; i--) {
  for (let j = 0; j < i; j ++) {
    if (numbers[j -1] > numbers[j]) {
      tmp = numbers[j -1]
      numbers[j -1] = numbers[j]
      numbers[j] = tmp
    }
  }
}
console.log(numbers)