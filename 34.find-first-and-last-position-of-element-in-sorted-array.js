/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start

const findFirstPosition = (nums, target) => {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)

    // nums[mid] === target -> keep
    // nums[mid] < target -> must be on the right side
    // nums[mid] > target -> must be on the left side

    if (nums[mid] < target) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}

const findLastPosition = (nums, target) => {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)

    // nums[mid] === target -> don't keep, must be on the right side
    // nums[mid] < target -> must be on the right side
    // nums[mid] > target -> must be on the left side
    if (nums[mid] <= target) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const left = findFirstPosition(nums, target)
  if (left === nums.length || nums[left] !== target) {
    return [-1, -1]
  }
  const right = findLastPosition(nums, target) - 1

  return [left, right]
}
// @lc code=end
