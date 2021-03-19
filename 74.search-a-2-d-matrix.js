/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  // treat it like a sorted array, do some calculation on the index stuffs

  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const rows = matrix.length
  const cols = matrix[0].length

  let start = 0
  let end = rows * cols - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const r = Math.floor(mid / cols)
    const c = mid % cols

    const cur = matrix[r][c]

    if (cur === target) {
      return true
    }
    if (cur < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return false
}

// @lc code=end
