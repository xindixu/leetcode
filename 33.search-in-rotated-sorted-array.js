/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  // find pivot
  const { length } = nums
  const lastIndex = length - 1

  let lo = 0
  let hi = lastIndex

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)

    if (nums[mid] > nums[hi]) {
      // mid > hi -> invalid -> pivot is on the right side
      lo = mid + 1
    } else {
      // mid <= hi -> valid -> move to the left side to find the smallest value (pivot)
      hi = mid
    }
  }

  const pivot = lo
  lo = 0
  hi = lastIndex

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    const realMid = (mid + pivot) % length

    if (nums[realMid] === target) {
      return realMid
    }
    if (nums[realMid] < target) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
}
// @lc code=end
