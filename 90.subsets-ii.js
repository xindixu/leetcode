/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort()
  const result = []
  const backtrack = (local, start) => {
    result.push([...local])
    for (let i = start; i < nums.length; i++) {
      // We don't want to compare with items that's out of the range (i <= start)
      // That item is already in the local array
      // Only compare to the previous item that's greater than start
      // skip duplicates
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }

      local.push(nums[i])
      backtrack(local, i + 1)
      local.pop()
    }
  }

  backtrack([], 0)
  return result
}
// @lc code=end

const addNumberToSets = (sets, num) => sets.map((set) => [...set, num])

// Cascade
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup2 = (nums) => {
  // Cascade
  const result = {
    empty: [],
  }

  for (const num of nums) {
    const local = addNumberToSets(Object.values(result), num)
    // Before adding, check if the result is unique
    local.forEach((arr) => {
      const sorted = arr.sort()
      if (!result[sorted]) {
        result[sorted] = sorted
      }
    })
  }

  return Object.values(result)
}
