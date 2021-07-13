/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
// Bucket sort
// Create buckets with widths of t+1, group the almost duplicated values into buckets
// Go through all elements:
// 1. compute the key to find which bucket this element belongs to
// 2. check buckets that have the same key, key + 1, key - 1 to see if there's a almost duplicated value
// 3. if not, save the result
// 4. also, delete the item that's no longer in the group i-k th item
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = (nums, k, t) => {
  const bucket = {}
  const width = t + 1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const key = Math.floor(num / width)

    if (bucket.hasOwnProperty(key)) return true
    if (bucket.hasOwnProperty(key + 1) && bucket[key + 1] - num <= t)
      return true
    if (bucket.hasOwnProperty(key - 1) && num - bucket[key - 1] <= t)
      return true
    bucket[key] = num

    if (i >= k) {
      const keyToDelete = Math.floor(nums[i - k] / width)
      delete bucket[keyToDelete]
    }
  }
  return false
}
// @lc code=end
