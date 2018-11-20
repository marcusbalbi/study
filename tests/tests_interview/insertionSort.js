let numbers = [6, 12, 4, 2, 7, 9, -3, 9, 0]

for(let i=0;i< numbers.length;i++) {
  let aux = numbers[i]
  let j = i

  while((j > 0) && numbers[j -1 ] > aux) {
    numbers[j] = numbers[j-1]
    j -= 1
  }
  numbers[j] = aux
}
console.log(numbers)