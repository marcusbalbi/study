console.log(typeof 10);
console.log(typeof 10.1);
console.log(typeof "javascript");
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Symbol('iterator'));



console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof new Date());
console.log(typeof /[a-z]/);


console.log((10).toFixed(2));
console.log(('java').replace('a', '4'));
console.log((true).toString());

console.log([] instanceof Array);
console.log(new Date() instanceof Date);


// number;

console.log(0b100);
console.log(0x20);
console.log(0o20);
console.log(010);
console.log(010);
console.log(new Number(10));
console.log((123.4).toExponential(10));
console.log((123).toFixed(2));
console.log((440).toPrecision(10));


console.log(2 + 2);
console.log( 5 -3)
console.log(2 * 4);
console.log(8 / 2);
console.log( 7 % 2);


let result = 10;
result +=2;
console.log(result);
result -=5;
console.log(result);
result *= 8;
console.log(result);
result /= 2;
console.log(result);
result %= 6;
console.log(result);


let incr = 0;
incr++
console.log(incr++);
console.log(++incr);
console.log(incr--);
console.log(--incr);


// bitwise

console.log(4 | 3); // using or compares each bit
console.log((4).toString(2).padStart(32,0))
console.log((3).toString(2).padStart(32,0))
console.log(0b111);

console.log(3 & 1);
console.log((3).toString(2).padStart(32, 0));
console.log((1).toString(2).padStart(32, 0));
console.log(0b1);

console.log(5 ^ 2);
console.log((5).toString(2).padStart(32, 0));
console.log((2).toString(2).padStart(32, 0));
console.log(0b111)

console.log(~2);
console.log((2).toString(2).padStart(32, 0));

console.log(4 << 2);
console.log(128 >> 1); // 64
console.log(256 >> 2); //64
console.log(-2 >>> 1);


// conversion

console.log(Number("10"))
console.log(Number("9.9"))
console.log(Number("0xFF"))
console.log(Number("0b10"))
console.log(Number("0o10"));
console.log(Number());
console.log(Number("Javascript"));
console.log(Number("255asd"));
console.log(Number("asd22"));


console.log(~~"10")
console.log(+"10")
console.log("10" - 0)
console.log("10" * 1)
console.log("10" / 1)
console.log("10" + 0) // 100 concat



console.log((0xA).toString(10));
console.log((10).toString(2))
console.log((0b1010).toString(16))
console.log((0o12).toString(10))
console.log((0b1000).toString(8))

console.log(parseInt("10", 10));
console.log(parseInt("9.9", 10));
console.log(parseInt("A", 16));
console.log(parseInt("11", 2));
console.log(parseInt("010", 8));
console.log(parseInt("10"));
console.log(parseInt("10abcd123")); // 10
console.log(parseInt("abcdjh123")); // NaN



console.log(parseFloat("10"))
console.log(parseFloat("2.5"))
console.log(parseFloat("0xFF"))
console.log(parseFloat("0b10"))
console.log(parseFloat("assdsa50")) // NaN
console.log(parseFloat("50asdasdas")) // 50


// IEEE754 http://weitz.de/ieee/
console.log(0.1 + 0.2);
console.log(666.7 - 666.6)
console.log(33.3 * 3)
console.log(12.2 / 0.1)


console.log(1/0);
console.log(Math.pow(10,1000));
console.log(Number.MAX_VALUE * 2);
console.log(Math.log(0))
console.log(-Number.MAX_VALUE * 2);


// NaN

console.log(10 * "Javascript")
console.log(0/0)
console.log(Math.sqrt(-9))
console.log(Math.log(-1))
console.log(parseFloat("Jacascript"))
console.log(NaN + 2)
console.log(NaN * NaN)
console.log(NaN + "js") // concat "NaN" + js
console.log(NaN === NaN) // false
console.log(NaN < NaN) // false
console.log(isNaN(NaN)) // true


console.log(Math.E); 
console.log(Math.LN10); 
console.log(Math.LN2);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

console.log(Math.abs(-78));
console.log(Math.ceil(25.4))
console.log(Math.floor(25.4))
console.log(Math.round(25.4))
console.log(Math.sign(41));
console.log(Math.trunc(41.66));


console.log("Javascript");
console.log('Javascript');
console.log(`Javascript`);

console.log(new String("Javascript"))

console.time("performance")
let counter = 0;
while(counter < 100000) {
  //"javascript"
  new String("javascript")
  counter++
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


let stringMethods = 'Javascript';
console.log(stringMethods.length);
console.log(stringMethods.indexOf('ipt'));
console.log(stringMethods.indexOf('php'));
console.log(stringMethods.lastIndexOf('a'));
console.log(stringMethods.toUpperCase());
console.log(stringMethods.toLowerCase());

console.log(stringMethods.charAt(5));
console.log(stringMethods.charCodeAt(3));
console.log(String.fromCharCode(97));

console.log(stringMethods.includes("script"))
console.log(stringMethods.startsWith('Jav'))
console.log(stringMethods.endsWith('ipt'));


console.log("C++".localeCompare("Ruby"))
console.log("Python".localeCompare("Java"))
console.log("JavaScript".localeCompare("JavaScript"));


console.log("C++".match(/\+/g));
console.log("C++".match(/\+/));
console.log("Java".search(/a/));
console.log("JavaScript".replace(/Java/, "Ecma"));
console.log("JavaScript".replace(/a/, "4"));


console.log(stringMethods.slice(0, 4))
console.log(stringMethods.slice(4))
console.log(stringMethods.slice(0, -6))
console.log(stringMethods.slice(-6))
console.log("C;C++;Java;Clojure".split(";"));
console.log(stringMethods.substring(0,4));
console.log(stringMethods.substring(4,0));
console.log(stringMethods.substring(4));



console.log(stringMethods.concat(";").concat("Java"));
console.log("script".padStart(10, "Java"));
console.log("C".padEnd(3,"+"))
console.log("C".concat("+".repeat(2)));
console.log(" Self ".trim())
console.log(" Scheme ".trimEnd())
console.log(" Perl ".trimStart())



