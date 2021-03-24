/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
// (start, target)
// (1,9)                        1                           2  ....... 9
// (2,8)       2                3  .... 8          (3,7)    3  ........7
// (3,6) 4...  6 ... 8  (4,5)   5                           7
//  result  [1,2,6]          [1,3,5]                     [2,3,7]
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  const result = []

  const backtrack = (local, start, target) => {
    if (local.length === k && target === 0) {
      result.push([...local])
      return
    }

    const max = Math.min(9, target)
    for (let i = start; i <= max; i++) {
      backtrack([...local, i], i + 1, target - i)
    }
  }

  backtrack([], 1, n)
  return result
}

// @lc code=end
