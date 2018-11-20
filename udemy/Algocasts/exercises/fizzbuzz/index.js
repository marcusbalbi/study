// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let i = 1;
  while(i<=n) {
    let dividedBy3 = i % 3 === 0
    let dividedBy5 = i % 5 === 0
    if (dividedBy3 && dividedBy5) {
      console.log('fizzbuzz')
    } else if (dividedBy5) {
      console.log('buzz')
    } else if (dividedBy3) {
      console.log('fizz')
    } else {
      console.log(i)
    }
    i++
  }
}

module.exports = fizzBuzz;
