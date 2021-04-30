/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = (num) => {
  const n = num.length
  if (n < 3) {
    return false
  }
  let result = false

  const backtrack = (local, start) => {
    const prev = local[local.length - 1]
    const pprev = local[local.length - 2]

    if (start === n && local.length >= 5) {
      const ppprev = local[local.length - 3]
      if (pprev + pprev === prev) {
        result = true
      }
      return
    }

    if (start > n) {
      return
    }

    for (let i = start; i < n; i++) {
      const cur = parseInt(num.substring(start, i + 1), 10)

      if (pprev + prev === cur || pprev === 0 || prev === 0) {
        backtrack([...local, cur], i + 1)
      }
    }
  }

  backtrack([0, 0], 0)
  return result
}

// @lc code=end
