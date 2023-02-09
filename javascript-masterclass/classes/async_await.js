function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid Input");
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

(async function () {
  try {
    //const err = await sum();
    const a = await sum(2, 2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
