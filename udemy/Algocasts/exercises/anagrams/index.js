// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let sStringA = stringA.replace(/[^\w]/ig).toLowerCase()
  let sStringB = stringB.replace(/[^\w]/ig).toLowerCase()

  let mapStringA = {}
  let mapStringB = {}

  sStringA.split('')
    .forEach((item) => { mapStringA[item] = mapStringA[item] +1 || 1 })
  sStringB.split('')
    .forEach((item) => { mapStringB[item] = mapStringB[item] +1 || 1 })

  if (sStringA.length !== sStringB.length) return false;
  for (let char in mapStringA) {
    if (mapStringA[char] !== mapStringB[char]) {
      return false
    }
  }
  return true

}

module.exports = anagrams;
