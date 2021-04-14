/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  // Constraints: piles.length <= h
  // Min possible k: 1
  // Max possible k: Max value of piles[i]
  piles.sort((a, b) => a - b)

  const getNumOfHNeeded = (k) =>
    piles.reduce((memo, cur) => {
      const curHour = Math.ceil(cur / k)
      return memo + curHour
    }, 0)

  let lo = 1
  let hi = piles[piles.length - 1]

  // [lo, hi]

  // [hi+1, hi]
  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)
    const numOfHNeeded = getNumOfHNeeded(mid)
    // [lo, mid, hi] -> [lo, mid-1], [mid+1, hi]
    // Finishes everything
    if (numOfHNeeded === h) {
      hi = mid - 1
    } else if (numOfHNeeded < h) {
      hi = mid - 1
    }
    // need more h -> eat more per hour k goes up
    else {
      lo = mid + 1
    }
  }

  return lo
}
// @lc code=end
