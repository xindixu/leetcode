/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
// Quick Select
const swap = (nums, a, b) => {
  ;[nums[a], nums[b]] = [nums[b], nums[a]]
}
// Select the first item as the pivot.
// Moves el smaller than the pivot to the left and el larger to the right.
const partition = (nums, lo, hi) => {
  const pivot = nums[lo]
  // scan nums[lo+1, hi], since nums[lo] is the pivot
  let i = lo
  let j = hi + 1
  while (true) {
    while (nums[++i] < pivot) if (i === hi) break
    while (nums[--j] > pivot) if (j === lo) break
    if (i >= j) break

    swap(nums, i, j)
  }
  swap(nums, lo, j)
  return j
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const nthSmallest = nums.length - k + 1
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const pivotIndex = partition(nums, lo, hi)

    // if it is the n-th smallest element
    if (pivotIndex === nthSmallest - 1) {
      return nums[pivotIndex]
    }
    if (pivotIndex > nthSmallest - 1) {
      hi = pivotIndex - 1
    } else {
      // too small, need to find something bigger
      lo = pivotIndex + 1
    }
  }
  return -1
}
// @lc code=end
