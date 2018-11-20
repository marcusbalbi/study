let numbers = [6, 12, 4, 2, 7, 9, -3, 9, 0, -50]

let min = numbers[0]

for(let i =0;i< numbers.length;i++) {
  if (numbers[i] < min) {
    min = numbers[i]
  }
}

console.log(' o menor é ', min)