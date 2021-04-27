/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const cur = numbers[left] + numbers[right]

    if (cur < target) {
      left++
    } else if (cur === target) {
      return [left + 1, right + 1]
    } else {
      right--
    }
  }
}
// @lc code=end
