/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  const { length } = citations
  let lo = 0
  let hi = length - 1

  // The value we are interested in is h = numOfAtLeast
  // Here, numOfAtLeast is closely related to mid (numOfAtLeast = length - mid)
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    const numOfAtLeast = length - mid
    const h = citations[mid]

    if (numOfAtLeast === h) {
      return numOfAtLeast
    }
    // too few numbers are at least h, h is too big
    if (numOfAtLeast < h) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return length - lo
}
// @lc code=end
