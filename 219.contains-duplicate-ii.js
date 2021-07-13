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

const containsNearbyDuplicate2 = (nums, k) => {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hash[num] != undefined && i - hash[num] <= k) {
      return true
    }
    hash[num] = i
  }
  return false
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// sort by number then compare number and the original index
const containsNearbyDuplicate2 = (nums, k) => {
  const array = nums.map((num, index) => ({ num, index }))

  array.sort((a, b) => a.num - b.num)

  for (let i = 0; i < nums.length - 1; i++) {
    if (
      array[i].num === array[i + 1].num &&
      array[i + 1].index - array[i].index <= k
    ) {
      return true
    }
  }
  return false
}
