/*
 * @lc app=leetcode id=668 lang=javascript
 *
 * [668] Kth Smallest Number in Multiplication Table
 */

// @lc code=start

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = (m, n, k) => {
  const findSmallerNumberCount = (x) => {
    let count = 0

    for (let r = 1; r <= m; r++) {
      // For the ith row, the items are:
      // i 2i 3i 4i 5i 6i
      // Say that x = 4i + 1
      // x // r = (4i+1) / 1 = 4 -> 4 items smaller than x
      count += Math.min(Math.floor(x / r), n)
    }
    return count
  }

  let lo = 1
  let hi = m * n

  // [hi+1, hi]
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const smallNumberCount = findSmallerNumberCount(mid)

    if (smallNumberCount < k) {
      // too few small numbers -> this number is too small -> it needs to be bigger
      lo = mid + 1
    } else if (smallNumberCount === k) {
      // enough small numbers -> continue going down to make sure that this number is in the chart -> make it smaller
      hi = mid - 1
    } else if (smallNumberCount > k) {
      // too many small numbers -> this number is too big -> it needs to be smaller
      hi = mid - 1
    }
  }

  return lo
}
// @lc code=end
