/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
// Approach 2: Backtracking
// ref: https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const result = []

  const backtrack = (local, start) => {
    // local will be updated, so here we want to create a copy of it
    result.push([...local])
    for (let i = start; i < nums.length; i++) {
      local.push(nums[i])
      backtrack(local, i + 1)
      local.pop()
    }
  }

  backtrack([], 0)
  return result
}
// @lc code=end

// Approach 1: cascading
const addToSets = (sets, num) => (sets.map((set) => [...set, num]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets2 = (nums) => {
  let output = [[]]
  for (const num of nums) {
    const local = addToSets(output, num)
    output = [...output, ...local]
  }
  return output
}
