/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start

const isValidIsland = ({ grid, visited, r, c }) =>
  grid[r][c] === 1 && visited[r][c] === 0

const bfs = ({ grid, visited, r, c }) => {
  const rows = grid.length
  const cols = grid[0].length
  let count = 0
  const queue = [{ r, c }]
  visited[r][c] = 1

  while (queue.length) {
    const { r: centerR, c: centerC } = queue.shift()

    count++
    const top = { r: centerR - 1, c: centerC }
    const bottom = { r: centerR + 1, c: centerC }
    const left = { r: centerR, c: centerC - 1 }
    const right = { r: centerR, c: centerC + 1 }

    if (top.r > -1 && isValidIsland({ grid, visited, ...top })) {
      queue.push(top)
      visited[top.r][top.c] = 1
    }
    if (bottom.r < rows && isValidIsland({ grid, visited, ...bottom })) {
      queue.push(bottom)
      visited[bottom.r][bottom.c] = 1
    }
    if (left.c > -1 && isValidIsland({ grid, visited, ...left })) {
      queue.push(left)
      visited[left.r][left.c] = 1
    }
    if (right.c < cols && isValidIsland({ grid, visited, ...right })) {
      queue.push(right)
      visited[right.r][right.c] = 1
    }
  }

  return count
}

const dfs = ({ grid, visited, r, c }) => {
  const rows = grid.length
  const cols = grid[0].length
  if (r < 0 || r > rows - 1 || c < 0 || c > cols - 1) {
    return 0
  }
  if (visited[r][c] === 1 || grid[r][c] === 0) {
    return 0
  }

  visited[r][c] = 1
  return (
    1 +
    dfs({ grid, visited, r: r - 1, c }) +
    dfs({ grid, visited, r: r + 1, c }) +
    dfs({ grid, visited, r, c: c - 1 }) +
    dfs({ grid, visited, r, c: c + 1 })
  )
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  const rows = grid.length
  const cols = grid[0].length
  let max = 0
  const visited = [...new Array(rows)].map(() => [...new Array(cols)].fill(0))

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && visited[r][c] === 0) {
        // calculate island
        max = Math.max(max, dfs({ grid, visited, r, c }))
      }
      visited[r][c] = 1
    }
  }
  return max
}
// @lc code=end
