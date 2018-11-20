let numbers = [6, 12, 4, 2, 7, 9, -3, 9, 0]

for(let i =0; i< numbers.length;i++) {
  for (let j = 0; j < (numbers.length -i); j++) {
    if (numbers[j +1] < numbers[j]) {
      let tmp = numbers[j +1]
      numbers[j +1] = numbers[j]
      numbers[j] = tmp
    }
  }
}
console.log(numbers)