const regex1 = /jhon@gmail.com/;
const regex2 = new RegExp("jhon@gmail.com");
console.log(typeof regex1);
console.log(typeof regex2);

let result = regex1.test("jhon@gmail.com");
console.log(result);

result = regex1.exec("jhon@gmail.com");
console.log(result);


console.log('*************************');

let regex3 = /dany@gmail.com/;

console.log(regex3.exec("Email: dany@gmail.com"))
console.log(regex3.exec("Email: dany@gmailxcom"))

regex3 = /dany@gmail\.com/;
console.log(regex3.exec("Email: dany@gmail.com"));
console.log(regex3.exec("Email: dany@gmailxcom")); // null


regex3 = /^dany@gmail\.com$/;
console.log(regex3.exec("Email: dany@gmail.com ttt"));
console.log(regex3.exec("dany@gmail.com"));

console.log("**************************");

regex3 = /^[a-z]*.@gmail\.com$/;
console.log(regex3.exec("teste@gmail.com"));
console.log(regex3.exec("@gmail.com"));


console.log("**************************");

regex3 = /^\w+.@\w+\.\w{2,3}$/;
console.log(regex3.exec("teste@gmail.com"));

console.log("**************************");

regex3 = /^\w+.@\w+(\.\w{2,3})+$/;
console.log(regex3.exec("teste@gmail.com.br"));


console.log("**************************");

regex3 = /^(\w+.)@(\w+)(\.\w{2,3})+$/;
console.log(regex3.exec("teste@gmail.com.br"));