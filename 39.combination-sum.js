/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start

// Constraints:
// 1. curTarget > 0
// 2. index >= start

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => a - b)

  const results = []

  const backtrack = (local, curTarget, start) => {
    // curTarget < 0, we are going too far
    if (curTarget < 0) {
      return
    }
    // that's what we want
    if (curTarget === 0) {
      results.push([...local])
      return
    }
    // array is sorted ascending, everything after start is greater than candidates[start]
    // if the curTarget is less than that, it is not possible to find a solution
    if (curTarget < candidates[start]) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      const curNum = candidates[i]
      const newTarget = curTarget - curNum
      // start = i, we only want to search forward to avoid duplicates
      backtrack([...local, curNum], newTarget, i)
    }
  }

  backtrack([], target, 0)
  return results
}
// @lc code=end
