/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// [lo, hi]
const findLowerBoundCC = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    if (nums[mid] < target) {
      // [mid + 1, hi]
      lo = mid + 1
    } else if (nums[mid] === target) {
      // go left
      // [lo, mid - 1]
      hi = mid - 1
    } else if (nums[mid] > target) {
      // [lo, mid - 1]
      hi = mid - 1
    }
  }

  // The value we want: lo, since we are looking for the lower bound
  // Range for lo: [0, nums.length]
  // - When the loop terminates with hi = nums.length - 1, lo = hi + 1. That is lo = nums.length
  if (lo >= nums.length || nums[lo] !== target) {
    return -1
  }
  return lo
}

const findUpperBoundCC = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    if (nums[mid] < target) {
      // [mid + 1, hi]
      lo = mid + 1
    } else if (nums[mid] === target) {
      // go right
      // [mid + 1, hi]
      lo = mid + 1
    } else if (nums[mid] > target) {
      // [lo, mid - 1]
      hi = mid - 1
    }
  }

  // The value we want: hi, since we are looking for the upper bound
  // range for hi: [-1, nums.length - 1]
  // - When the loop terminates with lo = 0, hi = lo - 1. That is hi = -1
  if (hi <= -1 || nums[hi] !== target) {
    return -1
  }
  return hi
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange2 = (nums, target) => {
  const lowerBound = findLowerBoundCC(nums, target)

  if (lowerBound === -1) {
    return [-1, -1]
  }

  const upperBound = findUpperBoundCC(nums, target)
  return [lowerBound, upperBound]
}

// @lc code=start

// [lo, hi)
const findLowerBoundCO = (nums, target) => {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    if (nums[mid] < target) {
      // [mid + 1, hi)
      lo = mid + 1
    } else if (nums[mid] === target) {
      // go left
      // [lo, mid)
      hi = mid
    } else {
      // [lo, mid)
      hi = mid
    }
  }

  // The value we want: lo, since we are looking for the lower bound
  // Range for lo: [0, nums.length)
  // - When the loop terminates with hi = nums.length, lo = hi. That is lo = nums.length
  if (lo >= nums.length || nums[lo] !== target) {
    return -1
  }
  return lo
}

const findUpperBoundCO = (nums, target) => {
  let lo = 0
  let hi = nums.length

  // terminates at [lo, lo)
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    if (nums[mid] < target) {
      // [mid + 1, hi)
      lo = mid + 1
    } else if (nums[mid] === target) {
      // go right
      // [mid + 1, hi)
      lo = mid + 1
    } else {
      // [lo, mid)
      hi = mid
    }
  }

  // The value we want: hi, since we are looking for the upper bound
  // Range for hi: [0, nums.length)
  // - When loop terminates with lo = 0, hi = lo. That is hi = 0
  // Note, we have a CO interval: [something, hi). This means that hi is not actually a possible answer. The possible answer should be hi - 1

  // Range for hi - 1: [-1, nums.length - 1)
  hi -= 1
  if (hi <= -1 || nums[hi] !== target) {
    return -1
  }
  return hi
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const lowerBound = findLowerBoundCO(nums, target)
  if (lowerBound === -1) {
    return [-1, -1]
  }
  const upperBound = findUpperBoundCO(nums, target)

  return [lowerBound, upperBound]
}

// @lc code=end
