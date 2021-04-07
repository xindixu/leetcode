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
const containsDuplicate = (nums) => {
  const set = new Set(nums)
  return nums.length !== set.size
}
// @lc code=end

// Time: O(n)
// Space: O(n)
// Using Set
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = (nums) => {
  const set = new Set(nums)
  return nums.length !== set.size
}