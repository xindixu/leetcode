/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  citations.sort((a, b) => a - b)
  const { length } = citations
  let lo = 0
  let hi = length - 1

  // The value we want is h = numOfAtLeast
  // The loop will end at [hi+1, hi] and lo, hi will approach mid
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    const numOfAtLeast = length - mid
    const h = citations[mid]

    if (numOfAtLeast === h) {
      return numOfAtLeast
    }

    if (numOfAtLeast < h) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  // numOfAtLeast = length - mid, so here, we return length - lo
  return length - lo
}
// @lc code=end
