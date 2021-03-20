/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
// Time: O(n)
// Space: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let selected
  let count = 0

  // 1. check if count === 0 and assign the cur num to selected first
  // 2. take the cur num into account, count ++

  // num         2 2 1 1 | 1 2 | 2
  // count       0 1 2 1 | 0 1 | 0
  // selected    2 2 2 2 | 1 1 | 2
  // newCount    1 2 1 0 | 1 0 | 1
  // within each segment, except the last one, num of selected == num of not selected (evened out)

  nums.forEach((num) => {
    if (count === 0) {
      selected = num
    }
    if (num === selected) {
      count++
    } else {
      count--
    }
  })
  return selected
}
// @lc code=end
