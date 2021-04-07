/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start

// Time: O(m*n)
// Space: O(1) - reusing the original grid
// 2D DP, from bottom-right
// Gotcha: if you go from the top-left, it won't work out as easy.
// In general, it is better to start with what you know, toward what you don't know.
// Here, we know that the bottom-right corner should be max(1 - value, 1).
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = (dungeon) => {
  const rows = dungeon.length
  const cols = dungeon[0].length


  dungeon[rows - 1][cols - 1] = Math.max(1 - dungeon[rows - 1][cols - 1], 1)

  // initialize last col
  const lastCol = cols - 1
  const lastRow = rows - 1
  for (let r = lastRow - 1; r >= 0; r--) {
    dungeon[r][lastCol] = Math.max(
      dungeon[r + 1][lastCol] - dungeon[r][lastCol],
      1
    )
  }

  // initialize last row
  for (let c = lastCol - 1; c >= 0; c--) {
    dungeon[lastRow][c] = Math.max(
      dungeon[lastRow][c + 1] - dungeon[lastRow][c],
      1
    )
  }

  // fill the rest
  for (let r = lastRow - 1; r >= 0; r--) {
    for (let c = lastCol - 1; c >= 0; c--) {
      const fromRight = dungeon[r][c + 1]
      const fromBottom = dungeon[r + 1][c]
      const sum = Math.min(fromRight, fromBottom) - dungeon[r][c]
      dungeon[r][c] = Math.max(1, sum)
    }
  }
  return dungeon[0][0]
}
// @lc code=end


// Time: O(m*n)
// Space: O(m*n)
// 2D DP, from bottom-right
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 const calculateMinimumHP = (dungeon) => {
  const rows = dungeon.length
  const cols = dungeon[0].length

  const minMemo = [...new Array(rows)].map(() => [...new Array(cols)])

  minMemo[rows - 1][cols - 1] = Math.max(1 - dungeon[rows - 1][cols - 1], 1)

  // initialize last col
  const lastCol = cols - 1
  const lastRow = rows - 1
  for (let r = lastRow - 1; r >= 0; r--) {
    minMemo[r][lastCol] = Math.max(
      minMemo[r + 1][lastCol] - dungeon[r][lastCol],
      1
    )
  }

  // initialize last row
  for (let c = lastCol - 1; c >= 0; c--) {
    minMemo[lastRow][c] = Math.max(
      minMemo[lastRow][c + 1] - dungeon[lastRow][c],
      1
    )
  }

  // fill the rest
  for (let r = lastRow - 1; r >= 0; r--) {
    for (let c = lastCol - 1; c >= 0; c--) {
      const fromRight = minMemo[r][c + 1]
      const fromBottom = minMemo[r + 1][c]
      const sum = Math.min(fromRight, fromBottom) - dungeon[r][c]
      minMemo[r][c] = Math.max(1, sum)
    }
  }
  return minMemo[0][0]
}