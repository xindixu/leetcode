/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
// One pass, in-place.
// The idea is that, we have three segments:
// _ _ _ _ _ _ _ _ _ _
// |                 |
// |
// Mark endOf0, endOf1, startOf2

// Throughout the loop, move endOf1 toward the end and startOf2 toward the front. Stop when they hit each other.
// Looking at nums[endOf1] (middle segment).
// - Where to move to?
//   item=0: move it to segment 1
//   item=1: no swap
//   item=2: move it to segment 3
// When moving, we want to preserve the item being overwritten. Thus, we can just swap the positions of the original and the target
// - After moving, update markers
//   item=0: increment endOf0, endOf1, since segment 1 need to increase
//   item=1: increment endOf1, since segment 2 need to increase
//   item=2: decrement startOf2, since segment 3 need to decrease

// Time: O(n)
// Space: O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  const { length } = nums
  let endOf0 = 0
  let endOf1 = 0
  let startOf2 = length - 1

  // endOf1 and startOf2 will move closer to each other in the loop
  while (endOf1 <= startOf2) {
    if (nums[endOf1] === 0) {
      [nums[endOf0], nums[endOf1]] = [nums[endOf1], nums[endOf0]]
      // Increment since we have one more known 0s
      endOf0++
      // Increment since endOf1 should be after endOf0.
      // # of known 1s didn't change, but # of known 0s increased
      endOf1++
    } else if (nums[endOf1] === 1) {
      // Increment since we have one more known 1s
      endOf1++
    } else if (nums[endOf1] === 2) {
      [nums[startOf2], nums[endOf1]] = [nums[endOf1], nums[startOf2]]
      // Decrement since we have one more known 2s
      startOf2--
    }
  }
}
// @lc code=end
