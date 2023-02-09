function callback_sum (a,b, callback) {
  setTimeout(() => {
    callback(a+ b);
  }, 1000);
}
callback_sum(2, 2, (result) => {
  console.log(result)
});


function promise_sum (a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) reject('invalid params')
    setTimeout(() => {
      resolve(a + b);
    }, Math.floor(Math.random() * 2000));
  })
}

promise_sum(3, 3).then((result) => { console.log(result) });

promise_sum().catch((err) => console.log(err));

Promise.all([promise_sum(2,2), promise_sum(4,4)]).then(function (results) {
  console.log(results)
});


Promise.race([promise_sum(23,2), promise_sum(1,1)]).then(function (results) {
  console.log(results)
});
;