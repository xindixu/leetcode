/*
 * @lc app=leetcode id=1482 lang=javascript
 *
 * [1482] Minimum Number of Days to Make m Bouquets
 */

// @lc code=start

const numOfBouquets = (bloomDay, days, minNumber) => {
  let total = 0
  let cur = 0
  for (const bloom of bloomDay) {
    if (bloom <= days) {
      cur++
    } else {
      cur = 0
    }
    if (cur === minNumber) {
      total++
      cur = 0
    }
  }
  return total
}

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = (bloomDay, m, k) => {
  // return numOfBouquets(bloomDay, 5, k)

  if (m * k > bloomDay.length) {
    return -1
  }

  // find lower bound for days
  // days
  // at least wait for one flower to bloom
  let lo = Math.min(...bloomDay)
  // at most wait for all flowers to bloom
  let hi = Math.max(...bloomDay)

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    const num = numOfBouquets(bloomDay, mid, k)

    if (num < m) {
      // need more bouquets => wait more days
      // [mid + 1, hi]
      lo = mid + 1
    } else if (num === m) {
      // has enough bouquets => check to see if we can wait fewer days
      // [lo, mid - 1]
      hi = mid - 1
    } else {
      // has too many bouquets => check to see if we can wait fewer days
      // [lo, mid - 1]
      hi = mid - 1
    }
  }

  return lo
}
// @lc code=end
