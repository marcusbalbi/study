var exampleArray = ['banana', 'apple', 'pineapple', 'strawberry'];

console.log('SLICE THE FIRST ITEM SHOULD NOT SHOW BANANA', exampleArray.slice(1, exampleArray.length));

console.log('SLICE THE OTHERS ITENS SHOULD SHOW ONLY BANANA', exampleArray.slice(0, 1));

console.log('SLICE ALL ITEMS EXEPT the last one, should show only strawberry', exampleArray.slice(exampleArray.length -1));

console.log('SHOULD SHOW ONLY the last two itens', exampleArray.slice(2));

console.log('NEGATIVE SLICE SHOULD SHOW ONLY apple and pineapple', exampleArray.slice(0, -1));
