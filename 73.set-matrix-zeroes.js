/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
// Solution
// Time: O(m*n)
// Space: O(1)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length

  // go thro each grid:
  // - mark if the col should be zero in the first row
  // - mark if the row should be zero in the firss col

  // Go thru x:
  // . x x x
  // . x x x
  // . x x x
  // . x x x
  let firstColShouldBeZero = false
  for (let r = 0; r < rows; r++) {
    // first grid stores info about both first row and first cols. Set an additional flag
    if (matrix[r][0] === 0) {
      firstColShouldBeZero = true
    }

    // ! skip the first col to avoid updating the first grid
    // Imagine:
    // x x x x
    // x x x x
    // 0 x x x
    // x x x x

    // When we see 0, we'll update the first grid of the col and the row, so we'll end up update (0,0).
    // We don't want that since (0,0) should track if firstRowShouldBeZeros.
    for (let c = 1; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0
        matrix[r][0] = 0
      }
    }
  }

  // go thru each grid that's not first row and not first col:
  // - update base on the first row and first col

  // Go thru x:
  // . . . .
  // . x x x
  // . x x x
  // . x x x
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0
      }
    }
  }

  // update first row based on first grid
  // Go thru x:
  // x x x x
  // . . . .
  // . . . .
  // . . . .
  // ! Since we are checking matrix[0][0], this loop need to come before the next loop
  if (matrix[0][0] === 0) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0
    }
  }

  // update first col based on firstColShouldBeZero
  // Go thru x:
  // x . . .
  // x . . .
  // x . . .
  // x . . .
  if (firstColShouldBeZero) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0
    }
  }
}

// @lc code=end

// My solution
// Time: O(m*n)
// Space: O(1)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes2 = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length

  // go thro each grid:
  // - mark if the col should be zero in the first row,
  // - if first row:
  //    - mark firstRowShouldBeZeros to true
  //   else:
  //    - fill the rows with zero expect

  let firstRowShouldBeZeros = false

  for (let r = 0; r < rows; r++) {
    let curRowShouldBeZeros = false
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        // mark col
        matrix[0][c] = 0

        if (r === 0) {
        // mark if first row should be zero
          firstRowShouldBeZeros = true
        } else {
          curRowShouldBeZeros = true
        }
      }
    }

    // after done with this row make row with zero
    if (curRowShouldBeZeros) {
      for (let c = 0; c < cols; c++) {
        matrix[r][c] = 0
      }
    }
  }

  // go thro each grid in the first row:
  // - fill the cols with zero
  for (let c = 0; c < cols; c++) {
    if (matrix[0][c] === 0) {
      for (let r = 0; r < rows; r++) {
        matrix[r][c] = 0
      }
    }
  }

  // if first row should be zero, fill it
  if (firstRowShouldBeZeros) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0
    }
  }
}
