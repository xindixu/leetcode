/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const result = []
  let p1 = 0
  let p2 = 0

  while (p1 < nums1.length && p2 < nums2.length) {
    const n1 = nums1[p1]
    const n2 = nums2[p2]

    if (n1 === n2) {
      result.push(n1)
      p1++
      p2++
    } else if (n1 > n2) {
      p2++
    } else {
      p1++
    }
  }

  return result
}
// @lc code=end
