/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
  for (let r = triangle.length - 2; r >= 0; r--) {
    for (let c = 0; c < triangle.length; c++) {
      triangle[r][c] += Math.min(triangle[r + 1][c], triangle[r + 1][c + 1])
    }
  }
  return triangle[0][0]
}
// @lc code=end

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal2 = (triangle) => {
  const dp = [[triangle[0][0]]]
  const rows = triangle.length
  for (let r = 1; r < triangle.length; r++) {
    const cur = []
    const cols = triangle[r].length
    for (let c = 0; c < cols; c++) {
      // check if it is the first item of the row
      const left = c === 0 ? Number.MAX_SAFE_INTEGER : dp[r - 1][c - 1]
      // check if it is the last item of the row
      const right = c === cols - 1 ? Number.MAX_SAFE_INTEGER : dp[r - 1][c]

      cur.push(triangle[r][c] + Math.min(left, right))
    }
    dp.push(cur)
  }

  return Math.min(...dp[rows - 1])
}
