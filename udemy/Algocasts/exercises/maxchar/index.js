// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let p = {}
  for(c of str) { p[c] ?  p[c]++ : p[c] = 1}
  let max = 0
  let char = ''
  for(c in p) {
    if (p[c] > max) {
      max = p[c]
      char = c
    }
  }
  return char

  
}

module.exports = maxChar;
