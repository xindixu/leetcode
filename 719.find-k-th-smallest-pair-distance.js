/*
 * @lc app=leetcode id=719 lang=javascript
 *
 * [719] Find K-th Smallest Pair Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = (nums, k) => {
  nums.sort((a, b) => parseInt(a, 10) - parseInt(b, 10))

  const findCumOfPairsLessThan = (x) => {
    let l = 0
    let r = 1
    let count = 0

    // sliding window method

    // window: [l, r)
    while (r < nums.length) {
      // expand right
      r++
      // check if we should collapse left
      while (nums[r - 1] - nums[l] > x) {
        l++
      }
      // update
      count += r - l - 1
    }

    return count
  }

  let lo = 0
  let hi = nums[nums.length - 1] - nums[0]

  while (lo <= hi) {
    const mid = Math.floor((hi - lo) / 2) + lo
    const numOfPairsLessThan = findCumOfPairsLessThan(mid)

    if (numOfPairsLessThan < k) {
      // this distance is too small, needs to be bigger
      lo = mid + 1
    } else if (numOfPairsLessThan === k) {
      // this is the kth smallest one, go down to find the real distance produced from the pairs
      hi = mid - 1
    } else {
      // this distance is too big, needs to be smaller
      hi = mid - 1
    }
  }
  return lo
}
// @lc code=end
