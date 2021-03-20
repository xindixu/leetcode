/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start

const getRound = (matrix, result, i) => {
  const rows = matrix.length
  const cols = matrix[0].length

  const top = i
  const bottom = rows - 1 - i
  const left = i
  const right = cols - 1 - i

  // go left
  const topSide = left <= right ? matrix[top].slice(left, right + 1) : []

  // go down
  const rightSide = top < bottom
    ? matrix.map((row) => row[right]).slice(top + 1, bottom + 1)
    : []

  // go left
  // top < bottom -> avoid duplicating topSide
  const bottomSide = left < right && top < bottom
    ? matrix[bottom].slice(left, right).reverse()
    : []

  // go up
  // left < right -> avoid duplicating rightSide
  const leftSide = top < bottom && left < right
    ? matrix.map((row) => row[left]).slice(top + 1, bottom).reverse()
    : []

  return [...result, ...topSide, ...rightSide, ...bottomSide, ...leftSide]
}
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  let result = []
  const rounds = Math.round(Math.min(rows, cols) / 2)

  for (let i = 0; i < rounds; i++) {
    result = getRound(matrix, result, i)
  }

  return result
}
// @lc code=end
