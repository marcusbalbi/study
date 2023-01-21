console.log(typeof true);
console.log(typeof false);
console.log(new Boolean(true));
console.log(new Boolean(false));

console.log("===============================");

console.log(new Boolean(10));
console.log(new Boolean("10"));
console.log(new Boolean(0));
console.log(new Boolean(""));
console.log(new Boolean(null));
console.log(new Boolean(undefined));
console.log(new Boolean({}));
console.log(new Boolean([]));

let cond = new Boolean(false);
if (cond) {
  console.log("cond is true");
} else {
  console.log("cond is false");
}

console.log("===============================");

console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log("===============================");

console.log(!!new String(""));
console.log(!!-10);
console.log(!!"Java");
console.log(!!{});
console.log(!![]);
console.log(!!/javascript/);
console.log(!!new Date());
console.log(!!function () {});


console.log('===============================');

console.log(1 == 2)
console.log(10 === 10)
console.log('a' != 'b')
console.log(3 !== 2)
console.log(6 > 7)
console.log(5 >= 5)
console.log('z' < 'x')
console.log('c' <= 'c')

console.log("===============================");


console.log(0 == '')
console.log(0 == '0')
console.log(false == undefined)
console.log(false == null)
console.log(null == undefined)
console.log(1 == true)
console.log(0 == false)
console.log(0 == '\n')


console.log("=========================================");


console.log(0 === "");
console.log(0 === "0");
console.log(false === undefined);
console.log(false === null);
console.log(null === undefined);
console.log(1 === true);
console.log(0 === false);
console.log(0 === "\n");


console.log("=========================================");

console.log(0 || 2)
console.log(1 || 2)
console.log(1 && 2)
console.log(0 && 2)


console.log("=========================================");

function generateSerial(max) {
  return Math.floor(Math.random() * (max || 1000))
}

console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());


console.log("===============================================")

let grade = 10 ? "good" : "bad";
console.log(grade);
grade = 0 ? "good" : "bad";
console.log(grade);