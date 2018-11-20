
let numbers = [6, 12, 4, 2, 7, 9]

let sortedNumbers = []

for (let i = numbers.length; i != 0;i--) {
  for (let j = 1; j < i; j++) {
    if (numbers[j -1] > numbers[j]) {
      let tmp = numbers[j -1]
      numbers[j -1] = numbers[j]
      numbers[j] = tmp
    }
  }
}

let isEven = numbers.length % 2 === 0
console.log('sorted list:', numbers)
if (!isEven) {
  console.log(numbers[Math.floor(numbers.length / 2)])
} else {
  let midPos = numbers.length / 2
  let mid = numbers[midPos]
  let mid2 = numbers[midPos -1]
  console.log((mid + mid2) / 2)
}





