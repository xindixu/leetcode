/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
// Dynamic programming, reuse grid matrix
// Time: O(m*n)
// Space: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const rows = grid.length
  const cols = grid[0].length

  // initialize first row
  for (let c = 1; c < cols; c++) {
    grid[0][c] += grid[0][c - 1]
  }

  // initialize first col
  for (let r = 1; r < rows; r++) {
    grid[r][0] += grid[r - 1][0]
  }

  // fill the rest
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      grid[r][c] += Math.min(grid[r][c - 1], grid[r - 1][c])
    }
  }

  return grid[rows - 1][cols - 1]
}
// @lc code=end
