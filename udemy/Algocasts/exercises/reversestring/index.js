// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = ''
  // for (let i = str.length;i>0;i--) {
  //     reversed = reversed.concat(str[i -1])
  // }
  for(let char of str) {
    reversed = char + reversed
  }
  return reversed
  // return str.split('').reverse().join('')
}

module.exports = reverse;
