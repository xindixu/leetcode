/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  // [lo, hi]
  let lo = 1
  let hi = num

  // [hi + 1, hi]
  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)

    if (mid * mid === num) {
      return true
    }
    // [lo, mid, hi] -> [lo, mid - 1] [mid + 1, hi]
    if (mid * mid < num) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return false
}
// @lc code=end

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare2 = (num) => {
  // [lo, hi)
  let lo = 1
  let hi = num + 1

  // [hi, hi)
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)

    if (mid * mid === num) {
      return true
    }
    // [lo, mid, hi) -> [lo, mid) [mid + 1, hi)
    if (mid * mid < num) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return false
}
