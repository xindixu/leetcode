/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start

const helper = (x, n) => {
  if (n === 1) {
    return x
  }

  if (n === 0) {
    return 1
  }

  const half = helper(x, Math.floor(n / 2))
  if (n % 2 === 0) {
    return half * half
  }
  return half * half * x
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) {
    return 1
  }

  if (n > 0) {
    return helper(x, n)
  }

  return 1 / helper(x, -n)
}
// @lc code=end
