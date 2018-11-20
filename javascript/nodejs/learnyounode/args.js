let sum = process.argv.reduce((prev, next) => {
  let number = Number(next)
  prev = prev || 0
  if(!Number.isNaN(number)) {
    return number + prev
  }

});
console.log(sum);
