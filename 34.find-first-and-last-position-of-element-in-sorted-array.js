/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// [lo, hi]
const findLowerBoundCC = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1
  // terminate at [hi + 1, hi]
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

  // range for lo: [0, nums.length]
  // hi = nums.length - 1, terminates at [hi + 1, hi]
  if (lo >= nums.length || nums[lo] !== target) {
    return -1
  }
  return lo
}

const findUpperBoundCC = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1
  // terminate at [lo, lo - 1]
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

  // range for hi: [-1, nums.length - 1]
  // lo = 0, terminates at [lo, lo - 1]
  if (hi < 0 || nums[hi] !== target) {
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

  // terminates at [hi, hi)
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

  // range for lo: [0, nums.length)
  // hi = nums.length, terminates at [hi, hi)
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

  hi -= 1
  // range for hi: [0, nums.length)
  // lo = 0, terminates at [lo, lo)
  if (hi < 0 || nums[hi] !== target) {
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
