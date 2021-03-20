/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const n = matrix.length
  // n                              n//2      n%2       r<  c<
  // 3 * 3 -> r = 0,    c = 0..1 -> 3//2 = 1, 3%2 = 1 -> 1, 2
  // 4 * 4 -> r = 0..1, c = 0..1 -> 4//2 = 2, 4%2 = 0 -> 2, 2
  // 5 * 5 -> r = 0..1, c = 0..2 -> 5//2 = 2, 5%2 = 1 -> 2, 3
  // 6 * 6 -> r = 0..2, c = 0..2 -> 6//2 = 3, 6%2 = 0 -> 3, 3

  // We only go thru grids in the top left corner
  for (let r = 0; r < (Math.floor(n / 2)); r++) {
    for (let c = 0; c < Math.floor(n / 2) + (n % 2); c++) {
      let lastR = r
      let lastC = c
      let lastNum = matrix[lastR][lastC]

      let newR = lastC
      let newC = n - 1 - lastR

      while (newR !== r || newC !== c) {
        const temp = matrix[newR][newC]
        matrix[newR][newC] = lastNum
        lastNum = temp
        // lastR, lastC denotes the current position
        lastR = newR
        lastC = newC

        // compute newR, newC based on the current position (denoted by lastR, lastC)
        newR = lastC
        newC = n - 1 - lastR
      }
      matrix[r][c] = lastNum
    }
  }
}
// @lc code=end
