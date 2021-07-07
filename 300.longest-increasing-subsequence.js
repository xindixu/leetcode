/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start

// Binary search: find left bound
const findSmallestGreaterEqual = (arr, target) => {
  let lo = 0
  let hi = arr.length - 1

  // terminates at [hi + 1, hi] or [lo, lo - 1]
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (arr[mid] < target) {
      // [mid + 1, hi]
      lo = mid + 1
    } else if (arr[mid] === target) {
      // [lo, mid - 1]
      hi = mid - 1
    } else {
      // [lo, mid - 1]
      hi = mid - 1
    }
  }

  return lo
}
// Build a subsequence
// When adding an element num to the sequence:
// - if it is greater than the largest, take it
// - else, find the first el >= num -> binary search
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const sequence = []

  nums.forEach((num, index) => {
    if (index === 0 || num > sequence[sequence.length - 1]) {
      sequence.push(num)
    } else {
      const indexToSwap = findSmallestGreaterEqual(sequence, num)
      sequence[indexToSwap] = num
    }
  })
  return sequence.length
}
// 1D DP:
// 1. dp[i] length of the longest increasing subsequence ending in that i-th el
// 2. dp[i] = max(dp[j]) + 1 for all j where j < i && nums[j] < nums[i]
// 3. Base case: dp[i] = 1 for all i
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS2 = (nums) => {
  const { length } = nums
  const dp = new Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    const curEl = nums[i]

    for (let j = 0; j < i; j++) {
      const prevEl = nums[j]
      if (prevEl < curEl) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  // find the max subsequence length
  return dp.reduce((max, cur) => (cur > max ? cur : max), 0)
}
// @lc code=end
