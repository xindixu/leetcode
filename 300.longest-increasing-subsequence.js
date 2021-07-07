/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
// 1D DP:
// 1. dp[i] length of the longest increasing subsequence ending in that i-th el
// 2. dp[i] = max(dp[j]) + 1 for all j where j < i && nums[j] < nums[i]
// 3. Base case: dp[i] = 1 for all i
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const { length } = nums
  const dp = new Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    const curEl = nums[i]
    let curMax = 0
    for (let j = 0; j < i; j++) {
      const prevEl = nums[j]
      if (prevEl < curEl) {
        curMax = Math.max(curMax, dp[j])
      }
    }
    dp[i] = curMax + 1
  }

  // find the max subsequence length
  return dp.reduce((max, cur) => (cur > max ? cur : max), 0)
}
// @lc code=end
