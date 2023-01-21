console.log(Symbol('a'))
console.log(Symbol('b'))
console.log(Symbol('c'))

console.log(Symbol("a") === Symbol("a"));


console.log(Symbol.hasInstance)
console.log(Symbol.isConcatSpreadable)
console.log(Symbol.iterator)
console.log(Symbol.match)
console.log(Symbol.replace)
console.log(Symbol.search)
console.log(Symbol.species)
console.log(Symbol.split)
console.log(Symbol.toPrimitive)
console.log(Symbol.toStringTag)
console.log(Symbol.unscopables)


console.log("=======================================");


let reg = /JavaScript/;
reg[Symbol.match] = false;
console.log("/JavaScript/".startsWith(reg));
