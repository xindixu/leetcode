/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start

const searchInTheRow = (array, target) => {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const curItem = array[mid]
    if (target === curItem) {
      return true
    }

    if (target < curItem) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

// Search rows, if within the row, binary search in the row
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  let top = 0
  let down = matrix.length - 1

  const col = matrix[0].length - 1

  while (top <= down) {
    const mid = Math.floor((top + down) / 2)
    const curRow = matrix[mid]

    const min = curRow[0]
    const max = curRow[col]
    // within the boundary
    if (min <= target && target <= max) {
      // search in the row
      return searchInTheRow(curRow, target)
    }

    if (target < min) {
      // target smaller than min -> search upper part
      down = mid - 1
    } else {
      // target larger than max -> search lower part
      top = mid + 1
    }
  }
  return false
}

// @lc code=end

// Treat it as a sorted array. Do normal binary search
// Time: O(log (m*n))
// Space: O(1)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix2 = (matrix, target) => {
  // treat it like a sorted array, do some calculation on the index stuffs

  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const rows = matrix.length
  const cols = matrix[0].length

  // first grid
  let start = 0
  // last grid (num of grids - 1)
  let end = rows * cols - 1

  // ! Note: <=
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
