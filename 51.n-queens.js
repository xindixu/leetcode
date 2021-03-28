/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
const PLACEHOLDER = "."
const QUEEN = "Q"
const isValid = ({ row, col, colsTaken, hillsTaken, dalesTaken }) => {
  if (colsTaken[col]) {
    return false
  }
  if (hillsTaken[row - col]) {
    return false
  }
  if (dalesTaken[row + col]) {
    return false
  }
  return true
}

/**
 * @param {number} n
 * @return {string[][]}
 */

// 1. Move row by row
// 2. In each row, go thru every col and check if the col is valid
// 2.1 If valid, place the queen, and continue solving the next row
// 2.2 If not valid, remove the queen, and continue testing the next col
// How to test if it is valid?
// When placing a Q at a col:
// - no more Q can be put on the same col, colsTaken[col] = true
// - no more Q can be put on the / diagonal, hillsTaken[row - col] = true
// - no more Q can be put on the \ diagonal, dalesTaken[row + col] = true

const solveNQueens = (n) => {
  const results = []
  const board = [...new Array(n)].map(() => [...new Array(n)].fill(PLACEHOLDER))

  const colsTaken = {}
  // / diagonal  row - col = const
  const hillsTaken = {}
  // \ diagonal  row + col = const
  const dalesTaken = {}

  const placeQueen = (r, c) => {
    board[r][c] = QUEEN
    colsTaken[c] = true
    hillsTaken[r - c] = true
    dalesTaken[r + c] = true
  }

  const removeQueen = (r, c) => {
    board[r][c] = PLACEHOLDER
    colsTaken[c] = false
    hillsTaken[r - c] = false
    dalesTaken[r + c] = false
  }

  const solve = (row) => {
    if (row === n) {
      // only need to update board
      results.push(board.map((r) => r.join("")))
      return
    }

    for (let col = 0; col < n; col++) {
      if (
        isValid({
          row,
          col,
          colsTaken,
          hillsTaken,
          dalesTaken,
        })
      ) {
        // place and update colsTaken, hillsTaken, dalesTaken,
        placeQueen(row, col)
        solve(row + 1)
        // remove and revert colsTaken, hillsTaken, dalesTaken,
        removeQueen(row, col)
      }
    }
  }

  solve(0)
  return results
}
// @lc code=end
