/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let hare = nums[0]
  let turtle = nums[0]

  // find where two pointers intersect
  do {
    hare = nums[nums[hare]]
    turtle = nums[turtle]
  } while (hare !== turtle)

  // find the entrance of the cycle
  turtle = nums[0]
  while (turtle !== hare) {
    turtle = nums[turtle]
    hare = nums[hare]
  }
  return hare
}
// @lc code=end
