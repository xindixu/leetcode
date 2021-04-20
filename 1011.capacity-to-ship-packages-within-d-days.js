/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start

const getNumOfDaysNeeded = (weights, capacity) => {
  let days = 1
  let total = 0
  for (const weight of weights) {
    total += weight
    if (total > capacity) {
      days++
      total = weight
    }
  }

  return days
}

const max = (arr) => arr.reduce((m, c) => (m > c ? m : c), 0)
const sum = (arr) => arr.reduce((s, c) => s + c, 0)

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
const shipWithinDays = (weights, D) => {
  // findLowerBound -> find the least capacity
  // capacity

  // boundary:
  // when weight = max, we'll use weights.length num of days
  let lo = max(weights)
  // when weight = sum, we'll use 1 day
  let hi = sum(weights)

  // [hi+1, hi]
  while (lo <= hi) {
    // capacity to test
    const mid = Math.floor((hi - lo) / 2) + lo
    // check num of days needed with capacity=mid
    const num = getNumOfDaysNeeded(weights, mid)

    if (num < D) {
      // num of days needed is less than D => current capacity is too high => decrease capacity
      // go left
      // [lo, mid - 1]
      hi = mid - 1
    } else if (num === D) {
      // num of days needed is less than D => current capacity is too high => decrease capacity
      // go left
      // [lo, mid - 1]
      hi = mid - 1
    } else if (num > D) {
      // num of days needed is more than D => current capacity is too low => increase capacity
      // go right
      // [mid + 1, hi]
      lo = mid + 1
    }
  }

  return lo
}
// @lc code=end
