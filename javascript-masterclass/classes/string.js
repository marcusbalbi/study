console.log("Javascript");
console.log("Javascript");
console.log(`Javascript`);

console.log(new String("Javascript"));

console.time("performance");
let counter = 0;
while (counter < 100000) {
  //"javascript"
  new String("javascript");
  counter++;
}
console.timeEnd("performance");

//

let host = "localhost";
let port = "3000";
let resource = "users";
let url = `https//${host}:${port}/${resource}`;
console.log(url);

console.log(`test
this
breaks
line
on rendering`);

let stringMethods = "Javascript";
console.log(stringMethods.length);
console.log(stringMethods.indexOf("ipt"));
console.log(stringMethods.indexOf("php"));
console.log(stringMethods.lastIndexOf("a"));
console.log(stringMethods.toUpperCase());
console.log(stringMethods.toLowerCase());

console.log(stringMethods.charAt(5));
console.log(stringMethods.charCodeAt(3));
console.log(String.fromCharCode(97));

console.log(stringMethods.includes("script"));
console.log(stringMethods.startsWith("Jav"));
console.log(stringMethods.endsWith("ipt"));

console.log("C++".localeCompare("Ruby"));
console.log("Python".localeCompare("Java"));
console.log("JavaScript".localeCompare("JavaScript"));

console.log("C++".match(/\+/g));
console.log("C++".match(/\+/));
console.log("Java".search(/a/));
console.log("JavaScript".replace(/Java/, "Ecma"));
console.log("JavaScript".replace(/a/, "4"));

console.log(stringMethods.slice(0, 4));
console.log(stringMethods.slice(4));
console.log(stringMethods.slice(0, -6));
console.log(stringMethods.slice(-6));
console.log("C;C++;Java;Clojure".split(";"));
console.log(stringMethods.substring(0, 4));
console.log(stringMethods.substring(4, 0));
console.log(stringMethods.substring(4));

console.log(stringMethods.concat(";").concat("Java"));
console.log("script".padStart(10, "Java"));
console.log("C".padEnd(3, "+"));
console.log("C".concat("+".repeat(2)));
console.log(" Self ".trim());
console.log(" Scheme ".trimEnd());
console.log(" Perl ".trimStart());
