/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start

// DP: 1D
// Time: O(n^2)
// Space: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  const memo = nums.map(() => 0)

  const lastIndex = nums.length - 1

  for (let i = lastIndex - 1; i >= 0; i--) {
    const furthestJump = Math.min(i + nums[i], lastIndex)
    let min = Number.MAX_SAFE_INTEGER
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j] < min) {
        min = memo[j]
      }
    }
    memo[i] = min + 1
  }

  return memo[0]
}
// @lc code=end
