console.log(typeof true);
console.log(typeof false);
console.log(new Boolean(true));
console.log(new Boolean(false));

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

console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!new String(""));
console.log(!!-10);
console.log(!!"Java");
console.log(!!{});
console.log(!![]);
console.log(!!/javascript/);
console.log(!!new Date());
console.log(!!function () {});
