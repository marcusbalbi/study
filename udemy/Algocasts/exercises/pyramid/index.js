// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  let pyLength = n + (n - 1)
  if (n === row) {
    return
  }

  if (pyLength === level.length) {
    console.log(level)
    return pyramid(n, row + 1, '')
  }
  
  let midPoint = Math.floor(pyLength/2)
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    pyramid(n, row, '#' + level)
  } else {
    pyramid(n, row, ' ' + level)
  }

}

module.exports = pyramid;
// const pyLength = n + (n-1)
// for(let row = 0; row < n; row++) {
//   let line = ''
//   for (let column = 0; column < pyLength; column ++) {
//     let mid = Math.floor(pyLength/2)
//     if (mid - row <= column && mid + row >= column) {
//       line += '#'
//     } else {
//       line += ' '
//     }
//   }
//   console.log(line)
// }
