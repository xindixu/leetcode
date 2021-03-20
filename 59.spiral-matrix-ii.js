/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start

const getRound = (matrix, n, i, count) => {
  const top = i
  const bottom = n - i - 1
  const left = i
  const right = n - i - 1

  // go left
  for (let k = left; k <= right; k++) {
    matrix[top][k] = count
    count += 1
  }

  // go down
  for (let k = top + 1; k <= bottom; k++) {
    matrix[k][right] = count
    count += 1
  }

  // go right
  for (let k = right - 1; k >= left; k--) {
    matrix[bottom][k] = count
    count += 1
  }

  // go up
  for (let k = bottom - 1; k >= top + 1; k--) {
    matrix[k][left] = count
    count += 1
  }
  return count
}

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const matrix = [...new Array(n)].map(() => [...new Array(n)])
  const rounds = Math.round(n / 2)
  let count = 1
  for (let i = 0; i < rounds; i++) {
    count = getRound(matrix, n, i, count)
  }
  return matrix
}
// @lc code=end
