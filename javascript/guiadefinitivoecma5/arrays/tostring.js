 var fruits = ['banana', 'apple', 'pineapple', 'strawberry']

var numbers = [0, 1, 2, 3, 4, 5, [6, 7]];

var customObject = {
  toString: function () {
    return 'HELLO ARRAY TOSTRING'
  },
  toLocaleString: function () {
    return 'OLA VETOR STRING LOCALIZADA'
  }
}
var mixedArray = Array.from(fruits)
mixedArray.push(customObject)

console.log(fruits.toString());

 console.log(numbers.toString());

 console.log(mixedArray.toString());
 
 console.log(mixedArray.toLocaleString());
