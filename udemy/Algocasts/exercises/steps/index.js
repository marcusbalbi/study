// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, rows = 0, stair = '') {
 if (n === rows) {
   return
 }

 if (n === stair.length) {
   console.log(stair)
   return steps(n, rows + 1, '')
 }
 if (stair.length <= rows) {
   stair += '#'
 } else {
  stair+= ' '
 }
 steps(n, rows, stair)
}
module.exports = steps;


// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let str = ''
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         str = str.concat('#')
//       } else {
//         str = str.concat(' ')
//       }
//     }
//     console.log(str)
//   }
// }