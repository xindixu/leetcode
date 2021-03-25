/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b)
  const results = []

  const backtrack = (local, start, curTarget) => {
    if (curTarget === 0) {
      results.push([...local])
      return results
    }

    if (curTarget < 0) {
      return
    }

    if (curTarget < candidates[start]) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      const curNum = candidates[i]
      if (i > start && curNum === candidates[i - 1]) {
        continue
      }
      backtrack([...local, curNum], i + 1, curTarget - curNum)
    }
  }
  backtrack([], 0, target)
  return results
}
// @lc code=end
