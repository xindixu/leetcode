/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const containsNearbyDuplicate = (nums, k) => {
  let result = false
  nums.reduce((memo, cur, index) => {
    if (memo[cur] !== undefined && index - memo[cur] <= k) {
      result = true
    } else {
      memo[cur] = index
    }

    return memo
  }, {})

  return result
}
// @lc code=end
