// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let spiralMatrix = []
  for (let i = 0; i< n;i++) {
    spiralMatrix.push([])
  }
  let counter = 1
  let startColumn = 0
  let endColumn = n -1
  let startRow = 0
  let endRow = n-1

  while(startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i<= endColumn;i++) {
      spiralMatrix[startRow][i] = counter
      counter++
    }
    startRow++;
    for(let i = startRow; i <= endRow;i++) {
      spiralMatrix[i][endColumn] = counter;
      counter++
    }
    endColumn--;
    
    for (let i = endColumn; i >= startColumn; i--) {
      spiralMatrix[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      spiralMatrix[i][startColumn] = counter
      counter++
    }
    startColumn++;
    
    // console.log(spiralMatrix)
  }
  return spiralMatrix
}
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
matrix(10).forEach((item) => {
  console.log(item)
})
module.exports = matrix;
