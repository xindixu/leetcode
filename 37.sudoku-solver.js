/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
const SIZE = 9
const PLACEHOLDER = "."

const isValid = (board, r, c, num) => {
  for (let i = 0; i < SIZE; i++) {
    // check row
    if (board[r][i] !== PLACEHOLDER && board[r][i] === num) {
      return false
    }
    // check col
    if (board[i][c] !== PLACEHOLDER && board[i][c] === num) {
      return false
    }
    // check sub box
    const row = 3 * Math.floor(r / 3) + Math.floor(i / 3)
    const col = 3 * Math.floor(c / 3) + (i % 3)
    if (board[row][col] !== PLACEHOLDER && board[row][col] === num) {
      return false
    }
  }
  return true
}

// 1. Takes in a local board, filled with initial data
// 2. Start with the first cell, go through each cell (loop 1)
// 3. If the cell filled continue
// 4. Else:
// 4.1 Go thru each number 1-9 (loop 2)
// 4.2 Test if that number is valid based on the local board
// 4.3 If not valid, check the next number
// 4.3.1 Else: put that number in the local board and check if we can solve that updated board (call solveBoard)
// 4.3.1.1 If we solved it, return true and pop stack out
//         This means we go back to the previous stack, continue on loop 1, with updated board
// 4.4 If we finished testing all numbers (end of loop 2), we still haven't see any valid solutions for the current grid, return false
//     This means that some grid before it is wrong.
//     The stack below us (called previously) will revert its current grid to '.' and continue trying the next number

const solveBoard = (board) => {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === ".") {
        // solve it
        // all possible solutions for the current grid
        for (let i = 1; i < SIZE + 1; i++) {
          const char = `${i}`
          // if this number is valid locally, put it in the board
          if (isValid(board, r, c, char)) {
            board[r][c] = char
            // solve the the updated board and gradually approaching a global solution
            if (solveBoard(board)) {
              return true
            }

            // revert it and try another number
            board[r][c] = "."
          }
        }
        // Tried all possible solutions for this grid but just doesn't work out, return false
        // This means that there were something wrong with the grids filled in before
        return false
      }
    }
  }
  return true
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  solveBoard(board)
}
// @lc code=end
