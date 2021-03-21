/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start

// DP: 2D
// Time: O(1)
// Space: O(m*n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const memo = [...new Array(m)].map(() => [...new Array(n)])

  // Initialize first row.
  // Every grid expect the first one have exactly one way to get to them, which is from its left
  for (let c = 1; c < n; c++) {
    memo[0][c] = 1
  }

  // initialize first col
  // Every grid expect the first one have exactly one way to get to them, which is from its top
  for (let r = 1; r < m; r++) {
    memo[r][0] = 1
  }

  // fill the rest
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      // Num of paths in this gird = num of paths from top + num of paths from left
      memo[r][c] = memo[r - 1][c] + memo[r][c - 1]
    }
  }

  return memo[m - 1][n - 1] || 1
}
// @lc code=end

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths2 = (m, n) => {
  const memo = [...new Array(m)].map(() => [...new Array(n)])

  // initialize first row
  for (let c = 0; c < n; c++) {
    // only way is coming from the right
    memo[0][c] = 1
  }

  // initialize first col
  for (let r = 0; r < m; r++) {
    // only way is coming from the top
    memo[r][0] = 1
  }

  // fill the rest
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      // only way is coming from the right
      memo[r][c] = memo[r][c - 1] + memo[r - 1][c]
    }
  }

  return memo[m - 1][n - 1]
}
