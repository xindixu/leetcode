/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length
  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  obstacleGrid[0][0] = 1

  // initialize first row
  for (let c = 1; c < cols; c++) {
    // 1 unique way to reach - from left
    // -> only if both current and the grid from left are a spaces
    // -> current should be 0, left grid should be 1 (processed already)
    obstacleGrid[0][c] =
      obstacleGrid[0][c] === 0 && obstacleGrid[0][c - 1] === 1 ? 1 : 0
  }

  // initialize first col
  for (let r = 1; r < rows; r++) {
    // 1 unique way to reach - from top
    // -> only if both current and the grid from top are spaces
    // -> current should be 0, top grid should be 1 (processed already)
    obstacleGrid[r][0] =
      obstacleGrid[r][0] === 0 && obstacleGrid[r - 1][0] === 1 ? 1 : 0
  }

  // fill the rest
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) {
        obstacleGrid[r][c] = 0
        continue
      }

      obstacleGrid[r][c] = obstacleGrid[r][c - 1] + obstacleGrid[r - 1][c]
    }
  }

  return obstacleGrid[rows - 1][cols - 1]
}
// @lc code=end

// Solution
// Time: O(m*n)
// Space: O(1) - reuse obstacleGrid
// Start from start and work the way right/down
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles3 = (obstacleGrid) => {
  const totalRows = obstacleGrid.length
  const totalCols = obstacleGrid[0].length

  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  // reuse obstacleGrid
  // start with (0,0)
  obstacleGrid[0][0] = 1

  // initialize first row
  for (let i = 1; i < totalCols; i++) {
    // cur grid is not obstacle and grid on the left is space
    obstacleGrid[0][i] =
      obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1 ? 1 : 0
  }

  // initialize first col
  for (let i = 1; i < totalRows; i++) {
    // cur grid is not obstacle and grid on the top is space
    obstacleGrid[i][0] =
      obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1 ? 1 : 0
  }

  for (let r = 1; r < totalRows; r++) {
    for (let c = 1; c < totalCols; c++) {
      if (obstacleGrid[r][c] === 1) {
        obstacleGrid[r][c] = 0
      } else {
        obstacleGrid[r][c] = obstacleGrid[r][c - 1] + obstacleGrid[r - 1][c]
      }
    }
  }

  return obstacleGrid[totalRows - 1][totalCols - 1]
}
// My method:
// Time: O(m*n)
// Space: O(m*n)
// Start from goal and work the way left/up
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles2 = (obstacleGrid) => {
  const totalRows = obstacleGrid.length
  const totalCols = obstacleGrid[0].length

  const lastRow = totalRows - 1
  const lastCol = totalCols - 1

  const memo = [...new Array(totalRows)].map(() => [...new Array(totalCols)])

  if (obstacleGrid[lastRow][lastCol] === 1 || obstacleGrid[0][0] === 1) {
    return 0
  }

  for (let row = lastRow; row >= 0; row--) {
    for (let col = lastCol; col >= 0; col--) {
      // obstacle
      if (obstacleGrid[row][col] === 1) {
        memo[row][col] = -1
        continue
      }

      // space
      // goal should be 1
      if (row === lastRow && col === lastCol) {
        memo[lastRow][lastCol] = 1
        continue
      }

      let cur = 0
      // cur grid = # of path in the grid below + # of path in the grid on the right

      // At the edge, it should be 0
      const right = col === lastCol ? 0 : memo[row][col + 1]
      const down = row === lastRow ? 0 : memo[row + 1][col]

      // If down or right is an obstacle, then don't add it
      if (down >= 0) {
        cur += down
      }
      if (right >= 0) {
        cur += right
      }

      memo[row][col] = cur < 0 ? -1 : cur
    }
  }

  return Math.max(0, memo[0][0])
}
