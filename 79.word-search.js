/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start

// Backtracking/DFS
// Go through every cell, return early if found
// For each cell, if current cell match the char at l, continue to search up/down/left/right cells
// If l === word.length (we've matched everything), set found to true and return

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const rows = board.length
  const cols = board[0].length
  const n = word.length
  let found = false

  const dfs = (r, c, l) => {
    if (found) {
      return
    }

    if (l === n) {
      found = true
      return
    }

    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return
    }

    if (board[r][c] !== word[l]) {
      return
    }

    board[r][c] = "#"

    for (const [x, y] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      dfs(r + x, c + y, l + 1)
    }
    board[r][c] = word[l]
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (found) {
        return true
      }
      dfs(r, c, 0)
    }
  }
  return found
}
// @lc code=end
