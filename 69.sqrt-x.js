/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x === 0) {
    return 0
  }

  let lo = 1
  let hi = x

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    const midSq = mid * mid
    if (midSq === x) {
      return mid
    }
    if (midSq > x) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return hi
}
// @lc code=end
