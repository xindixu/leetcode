/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const memo = [...new Array(m)].map(() => [...new Array(n)])

  // initialize first row
  for (let c = 0; c < n; c++) {
    // only way is coming from the right
    memo[0][c] = 1
  }

  // intiialize first col
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
// @lc code=end
