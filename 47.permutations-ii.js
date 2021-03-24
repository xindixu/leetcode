/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  nums.sort()
  const n = nums.length
  const result = []

  const backtrack = (local, selected) => {
    if (local.length === n) {
      result.push([...local])
      return
    }
    // Need access to all numbers
    for (let i = 0; i < n; i++) {
      const num = nums[i]
      // selected or same as previous and previous is selected
      if (selected[i] || (i > 0 && num === nums[i - 1] && !selected[i - 1])) {
        continue
      }

      // use that number -> add it to local, set as selected. Note that we use position to mark if an item is selected or not
      backtrack([...local, num], { ...selected, [i]: true })
    }
  }

  backtrack([], [])
  return result
}
// @lc code=end
