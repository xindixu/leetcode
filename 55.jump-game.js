/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// DP: 1D
// Time: O(n)
// Space: O(1)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  const lastIndex = nums.length - 1

  let lastReachablePosition = lastIndex

  for (let i = lastIndex - 1; i >= 0; i--) {
    // At i, check if it can reach the lastReachablePosition. If yes, make i the new lastReachablePosition
    if (i + nums[i] >= lastReachablePosition) {
      lastReachablePosition = i
    }
  }

  return lastReachablePosition === 0
}
// @lc code=end

// DP: 1D
// Time: O(n^2)
// Space: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump2 = (nums) => {
  const memo = nums.map(() => false)
  const lastIndex = nums.length - 1
  memo[lastIndex] = true

  for (let i = lastIndex - 1; i >= 0; i--) {
    const furthestJump = Math.min(i + nums[i], lastIndex)
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j]) {
        memo[i] = true
        break
      }
      memo[i] = false
    }
  }

  return memo[0]
}
