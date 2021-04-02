/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start

const getSum = (nums, start, end) => {
  let sum = 0
  for (let i = start; i <= end; i++) {
    sum += nums[i]
  }
  return sum
}
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let s = 0
  let e = 0
  let minLength = Number.MAX_SAFE_INTEGER

  while (s <= e && e < nums.length) {
    const sum = getSum(nums, s, e)

    if (sum < target) {
      e++
    } else {
      minLength = Math.min(minLength, e - s + 1)

      s++
    }
  }
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength
}
// @lc code=end
