/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start

const SIZE = 9
const PLACEHOLDER = "."
const checkRow = (board, row) => {
  const used = [...new Array(SIZE)].fill(false)
  for (let c = 0; c < SIZE; c++) {
    const element = board[row][c]
    if (element === PLACEHOLDER) {
      continue
    }
    if (used[element - 1]) {
      return false
    }
    used[element - 1] = true
  }
  return true
}

const checkCol = (board, col) => {
  const used = [...new Array(SIZE)].fill(false)
  for (let r = 0; r < SIZE; r++) {
    const element = board[r][col]
    if (element === PLACEHOLDER) {
      continue
    }
    if (used[element - 1]) {
      return false
    }
    used[element - 1] = true
  }
  return true
}

// top left corner
const checkSubBox = (board, row, col) => {
  const used = [...new Array(SIZE)].fill(false)
  for (let i = 0; i < SIZE; i++) {
    const r = row + Math.floor(i / 3)
    const c = col + (i % 3)
    const element = board[r][c]
    if (element === PLACEHOLDER) {
      continue
    }
    if (used[element - 1]) {
      return false
    }
    used[element - 1] = true
  }
  return true
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  for (let i = 0; i < SIZE; i++) {
    if (!checkRow(board, i)) {
      return false
    }
    if (!checkCol(board, i)) {
      return false
    }

    const r = 3 * Math.floor(i / 3)
    const c = 3 * (i % 3)

    if (!checkSubBox(board, r, c)) {
      return false
    }
  }
  return true
}
// @lc code=end
