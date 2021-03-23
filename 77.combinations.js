/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
// Backtracking
// 1. result array to store all results
// 2. backtrack fn
//   2.1. terminate condition, when satisfied, push local to result and return
//   2.2. in each node, there're multiple branches to recurse. Call backtrack for each branch
//      Note:
//      - For each branch, the initial condition shouldn't change, as these branches originated from the same node.
//      - Update fn args for backtrack fn. Those args describes conditions for next level branches
// 3. call backtrack fn with initial params
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const result = []
  const backtrack = (local, cur) => {
    if (local.length === k) {
      result.push([...local])
      return
    }

    for (let i = cur + 1; i <= n; i++) {
      backtrack([...local, i], i)
    }
  }

  backtrack([], 0)
  return result
}
// @lc code=end
