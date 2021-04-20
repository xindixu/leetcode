/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)

    if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      hi = mid
    }
  }
  return -1
}
// @lc code=end

const binarySearchCC = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)

    if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      hi = mid - 1
    }
  }
  return -1
}

const binarySearchCO = (nums, target) => {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)

    if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      hi = mid
    }
  }
  return -1
}
