/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// set
const containsDuplicate = (nums) => {
  const set = new Set(nums)
  return nums.length !== set.size
}
// @lc code=end
// sort
const containsDuplicate2 = function (nums) {
  nums.sort()
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
