/*
 * @lc app=leetcode id=786 lang=javascript
 *
 * [786] K-th Smallest Prime Fraction
 */

// @lc code=start

const countElSmaller = (arr, num, initT, initB) => {
  const n = arr.length

  let count = 0
  let b = 1
  let t = 0

  let maxF = 0
  let prevT = initT
  let prevB = initB

  // count # of el < mid
  while (t < n - 1) {
    // for each row, find the first el <= num
    while (b < n && arr[t] / arr[b] > num) {
      // go left to get a smaller num
      b++
    }

    if (b === n) {
      break
    }

    count += n - b

    const f = arr[t] / arr[b]
    if (f > maxF) {
      prevT = t
      prevB = b
      maxF = f
    }
    t++
  }

  return { count, top: prevT, bottom: prevB }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const kthSmallestPrimeFraction = (arr, k) => {
  let lo = 0
  let hi = 1

  let top = 0
  let bottom = 1
  let count

  // [hi, hi)
  while (lo < hi) {
    const mid = lo + (hi - lo) / 2
    ;({ count, top, bottom } = countElSmaller(arr, mid, top, bottom))

    if (count < k) {
      // too small, need something bigger
      lo = mid
    } else if (count === k) {
      return [arr[top], arr[bottom]]
    } else {
      hi = mid
    }
  }
  return [arr[top], arr[bottom]]
}
// @lc code=end
