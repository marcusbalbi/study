var exampleArray = [1 ,2 ,3 ,4, 5];

console.log('CONCAT PARAMS', exampleArray.concat(6, 7, 8));

console.log('CONCAT ARRAY', exampleArray.concat([6, 7, 8]))

console.log('CONCAT MULTIPLE ARRAYS', exampleArray.concat([6, 7], [8, 9]))

console.log('CONCAT ARRAY AND PARAMS', exampleArray.concat(6, 7, [8, 9, 10]));
