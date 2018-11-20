var exampleArray = ['banana', 'apple', 'pineapple', 'strawberry'];

console.log('REMOVE ONLY pineapple', exampleArray.splice(2, 1), exampleArray);

var numbers = [0, 1, 2, 3, 4, 5, 6]

console.log('REMOVE ALL NUMBER AFTER 2', numbers.splice(2), numbers);

console.log('INSERT NEW LETTERS ON NUMBERS', numbers.splice(numbers.length, 0, 'a', 'b', 'c'), numbers);

console.log('REMOVE LETTERS AND INSERT THE NUMBERS', numbers.splice(2, 5, 2, 3, 4, 5, 6), numbers);
