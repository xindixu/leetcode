/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
// Bayer - Moore Voting Algorithm
// Big idea, line up the same item in the same column, try to pair it with some other elements
// In the most basic version, one pair has only two elements. But in this question, one pair has three elements.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  // find the majority element (doesn't mean that their frequency > n/3)
  let candidate1
  let candidate2

  let count1 = 0
  let count2 = 0
  nums.forEach((num) => {
    if (num === candidate1) {
      // group candidate1 in column 1 -> num of not paired candidate1++
      count1++
    } else if (num === candidate2) {
      // group candidate2 in column 2 -> num of not paired candidate2++
      count2++
    } else if (count1 === 0) {
      count1 = 1
      candidate1 = num
    } else if (count2 === 0) {
      count2 = 1
      candidate2 = num
    } else {
      // we found some item that's not candidate1 nor candidate2
      // in this case, we put this item in column3 -> num of not paired candidate1-- , candidate2--
      count1--
      count2--
    }
  })

  // verify these candidates (we only need to count 1 to 2 elements -> O(n))
  const candidates = [...new Set([candidate1, candidate2])]

  return candidates.filter((candidate) => {
    if (candidate === undefined) {
      return false
    }
    const freq = nums.filter((num) => num === candidate).length
    if (freq > Math.floor(nums.length / 3)) {
      return true
    }
    return false
  })
}
// @lc code=end
