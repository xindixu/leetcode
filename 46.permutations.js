/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const n = nums.length
  const result = []

  const backtrack = (local, selected) => {
    if (local.length === n) {
      result.push(local)
      return
    }

    const unSelected = nums.filter((num) => !selected[num])

    for (const num of unSelected) {
      backtrack([...local, num], { ...selected, [num]: true })
    }
  }

  backtrack([], {})
  return result
}
// @lc code=end
