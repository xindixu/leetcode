/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
const swap = (nums, i, j) => {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}
const quickSort = (arr) => {
  const partition = (nums, lo, hi) => {
    const pivot = nums[lo]
    // scan nums[lo+1, hi], since nums[lo] is the pivot
    let i = lo
    let j = hi + 1

    while (true) {
      // Ensure nums[lo..i] < pivot, break if out of bound
      while (nums[++i] < pivot) if (i === hi) break

      // Ensure nums[j..hi] > pivot, break if out of bound
      while (nums[--j] > pivot) if (j === lo) break

      // Break when i, j cross over
      if (i >= j) break

      // Here, we have nums[i] > pivot && nums[j] < pivot
      // Swap nums[i] & nums[j]
      // Result will be nums[lo..i] < pivot < nums[j..hi]
      swap(nums, i, j)
      // Continue sorting remaining parts
    }
    // Swap pivot to the correct position
    swap(nums, lo, j)
    // nums[lo..j-1] <= nums[j] <= nums[j+1..hi]
    return j
  }

  const sort = (nums, lo, hi) => {
    if (lo >= hi) {
      return
    }

    const pivot = partition(nums, lo, hi)
    // After partition, nums[lo..pivot - 1] < nums[pivot] and nums[pivot + 1..hi] > nums[pivot]
    // Continue sorting on both sides
    sort(nums, lo, pivot - 1)
    sort(nums, pivot + 1, hi)
  }

  sort(arr, 0, arr.length - 1)
  return arr
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  return quickSort(nums)
}
// @lc code=end
