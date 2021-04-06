/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const m = nums1.length
  const n = nums2.length

  if (m > n) {
    return findMedianSortedArrays(nums2, nums1)
  }

  let lo = 0
  let hi = m

  const getMedian = (leftMax1, leftMax2, rightMin1, rightMin2) => {
    if ((m + n) % 2 === 0) {
      return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2
    }
    return Math.max(leftMax1, leftMax2)
  }

  while (lo <= hi) {
    const partitionX = Math.floor((lo + hi) / 2)
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX

    // Nothing on the left side, then set it as max
    const leftMax1 =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1]
    const leftMax2 =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1]

    const rightMin1 =
      partitionX === m ? Number.MAX_SAFE_INTEGER : nums1[partitionX]
    const rightMin2 =
      partitionY === n ? Number.MAX_SAFE_INTEGER : nums2[partitionY]

    if (leftMax1 <= rightMin2 && leftMax2 <= rightMin1) {
      return getMedian(leftMax1, leftMax2, rightMin1, rightMin2)
    }

    if (leftMax2 > rightMin1) {
      // we have too much on the left side -> move right
      lo = partitionX + 1
    } else {
      // we have too much on the right side -> move left
      hi = partitionX - 1
    }
  }
  return -1
}
// @lc code=end
