/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start

// Time: O(m+n)
// Space: O(min(m,n))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  // Keep nums1 the smaller array so that we can reduce space
  if (nums1.length > nums2.length) {
    return intersection(nums2, nums1)
  }
  const numsIn1 = nums1.reduce((memo, cur) => {
    if (!memo[cur]) {
      memo[cur] = true
    }
    return memo
  }, {})

  const recorded = {}
  const result = []
  nums2.forEach((num) => {
    if (numsIn1[num] && !recorded[num]) {
      result.push(num)
      recorded[num] = true
    }
  })
  return result
}
// @lc code=end

// Time: O(n*log(n))
// Space: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const result = []
  let p1 = 0
  let p2 = 0
  while (p1 < nums1.length && p2 < nums2.length) {
    const num1 = nums1[p1]
    const num2 = nums2[p2]
    if (num1 === num2) {
      result.push(num1)

      while (num1 === nums1[p1 + 1]) {
        p1++
      }
      while (num2 === nums2[p2 + 1]) {
        p2++
      }
    }

    if (num1 < num2) {
      // p1 is pointing at el that's too small
      p1++
    } else {
      // p2 is pointing at el that's too small
      p2++
    }
  }
  return result
}
