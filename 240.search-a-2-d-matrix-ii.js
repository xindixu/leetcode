/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start

// Time: O(m+n)
// Start on the top right corner

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const rows = matrix.length
  const cols = matrix[0].length

  let r = 0
  let c = cols - 1

  // r will always increment & c will always decrement
  // - you want something smaller => c--
  // - want something bigger => r++
  while (r < rows && c >= 0) {
    const cur = matrix[r][c]
    if (cur === target) {
      return true
    }

    if (cur > target) {
      // want something smaller but everything in the cur col > cur
      // cur is the smallest item in the col)
      c--
    } else {
      // want something bigger, but everything in the cur row < cur
      // cur is the biggest item in the row
      r++
    }
  }
  return false
}
// @lc code=end
