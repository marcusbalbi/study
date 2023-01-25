const charsets = new Set(["ASCII", "UTF8", "UTF16"]);
console.log(charsets);
console.log(charsets.size);

console.log(charsets.add("ASCII"))
console.log(charsets.add("CP-12312"))
console.log(charsets);
console.log(Array.from(charsets))

charsets.forEach((charset) => console.log(charset))

console.log(charsets.has("ASCII"))
console.log(charsets.has("ASC"));

console.log(charsets.delete("CP-12312"));
console.log(charsets);


console.log(charsets.clear())
console.log(charsets);


const arr = [10,10, 10];

console.log(Array.from(new Set(arr)))