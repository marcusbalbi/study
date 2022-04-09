function makeTriangular(val) {
  const triangulars = [1];
  for (let i = 2; i <= val; i++) {
    triangulars.push(triangulars[triangulars.length - 1] + i);
  }

  return triangulars;
}

console.log(makeTriangular(10));
