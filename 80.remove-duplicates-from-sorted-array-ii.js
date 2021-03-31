/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let destToFill = 0

  for (const n of nums) {
    // Test for valid elements:
    // ex. 0 0 1 1 2 3
    // - n > nums[destToFill - 2], meaning that the cur item is greater than pprev item, which means the pprev item appears less than 3 times
    // - elements in destToFill < 2 are always valid since there aren't anything to appear before that are duplicates
    if (destToFill < 2 || n > nums[destToFill - 2]) {
      nums[destToFill] = n
      destToFill++
    }
  }

  return destToFill
}
// @lc code=end
