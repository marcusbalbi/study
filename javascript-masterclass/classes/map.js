const timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

console.log(timeUnits);
console.log(Array.from(timeUnits));

console.log(timeUnits.size)
console.log(timeUnits.set("day", 3600 * 24));

console.log(timeUnits);

console.log(timeUnits.forEach((val, k) => console.log('val', val, 'key', k)))

console.log(timeUnits.has('day'))
console.log(timeUnits.has('ms'))

console.log(timeUnits.get('hour'))
console.log(timeUnits.get('year'))


console.log(timeUnits.delete('day'));
console.log(timeUnits.delete('year'));
console.log(timeUnits.size);


console.log(timeUnits.clear())
console.log(timeUnits.size);


const obj = {};
obj[10] = 'Number'
obj["10"] = 'String'
obj[true] = 'Boolean'
obj["true"] = 'String'

console.log(obj[10])
console.log(obj["10"])
console.log(obj[true])
console.log(obj["true"])

const map = new Map([[10, "Number"], ["10", "String"], [true, "Boolean"], ["true", "String"]]);
console.log(map)

