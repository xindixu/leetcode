/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start

const getRound = ({
  matrix, i, rows, cols,
}) => {
  //   0 1 2 3 4 5 6 7
  // 0 +-------------+
  // 1 |             |
  // 2 |             |
  // 3 |             |
  // 4 |             |
  // 5 |             |
  // 6 +-------------+

  // 0
  const left = i
  // 8 - 0 - 1 = 7
  const right = cols - i - 1
  // 0
  const top = i
  // 7 - 0 - 1 = 6
  const bottom = rows - i - 1

  // go right
  // 0 -> 7
  // condition left < right + 1 to check if slice returns empty or not
  const topSide = left < right + 1 ? matrix[top].slice(left, right + 1) : []

  // go down
  // 1 -> 6
  // condition top + 1 < bottom + 1 to check if slice returns empty or not
  const rightSide = top + 1 < bottom + 1
    ? matrix.slice(top + 1, bottom + 1).map((row) => row[right])
    : []

  // go left
  // 6 -> 0 or 0 -> 6 then reverse
  // condition left < right to check if slice returns empty or not
  // condition top < bottom to make sure we don't return duplicates as topSide
  const bottomSide = top < bottom && left < right
    ? matrix[bottom].slice(left, right).reverse()
    : []

  // go up
  // 5 -> 1 or 1 -> 5 then reverse
  // condition top + 1 < bottom to check if slice returns empty or not
  // condition left < right to make sure we don't return duplicates as rightSide
  const leftSide = left < right && top + 1 < bottom
    ? matrix.slice(top + 1, bottom).map((row) => row[left]).reverse()
    : []

  return [...topSide, ...rightSide, ...bottomSide, ...leftSide]
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  let result = []
  const rounds = Math.round(Math.min(rows, cols) / 2)

  // 2 * 3
  // 0 x
  // x x
  // x x

  // 2 / 2 = 1, 3 / 2 = 1.5 -> min = 1 -> around = 1     -> (0,0)

  // 3 * 3
  // 0 x x
  // x 0 x
  // x x x

  // 3 / 2 = 1.5, 3 / 2 = 1.5 -> min = 1.5 -> around = 2    -> (0,0), (1,1)
  for (let i = 0; i < rounds; i++) {
    const curRoundResult = getRound({
      matrix, i, rows, cols,
    })
    result = [...result, ...curRoundResult]
  }

  return result
}
// @lc code=end
