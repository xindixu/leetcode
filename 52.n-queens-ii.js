/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start

const isValid = ({ row, col, colsTaken, hillsTaken, dalesTaken }) =>
  !colsTaken[col] && !hillsTaken[row - col] && !dalesTaken[row + col]

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
  let results = 0
  const colsTaken = {}
  // / diagonal row - col = const
  const hillsTaken = {}
  // \ diagonal row + col = const
  const dalesTaken = {}

  const backtrack = (row) => {
    if (row === n) {
      results++
      return
    }

    for (let col = 0; col < n; col++) {
      if (isValid({ row, col, colsTaken, hillsTaken, dalesTaken })) {
        colsTaken[col] = true
        hillsTaken[row - col] = true
        dalesTaken[row + col] = true

        backtrack(row + 1)
        colsTaken[col] = false
        hillsTaken[row - col] = false
        dalesTaken[row + col] = false
      }
    }
  }

  backtrack(0)
  return results
}
// @lc code=end
