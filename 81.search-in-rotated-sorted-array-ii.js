/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start

const isElInFirstArr = (nums, start, el) => nums[start] <= el

// el === nums[start] -> el could be in either F or S array
const isBinarySearchHelpful = (nums, start, el) => nums[start] !== el

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
  const { length: n } = nums

  let lo = 0
  let hi = n - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (nums[mid] === target || nums[lo] === target || nums[hi] === target) {
      return true
    }

    if (!isBinarySearchHelpful(nums, lo, nums[mid])) {
      lo += 1
      continue
    }

    const isMidInFirstArray = isElInFirstArr(nums, lo, nums[mid])
    const isTargetInFirstArray = isElInFirstArr(nums, lo, target)
    if (isMidInFirstArray !== isTargetInFirstArray) {
      // target, mid in different arrays
      if (isTargetInFirstArray) {
        // target in F, mid in S -> [start, mid)
        hi = mid - 1
      } else {
        // target in S, mid in F -> (mid, end]
        lo = mid + 1
      }

      continue
    }

    // target, mid both in one array
    if (nums[mid] < target) {
      // both in F: mid ... target | .... -> (mid, end]
      // both in S: .... | mid ... target -> (mid, end]
      lo = mid + 1
    } else {
      // both in F: target ... mid | ... -> [start, mid)
      // both in S: .... | target ... mid -> (mid, end]
      hi = mid - 1
    }
  }

  return false
}
// @lc code=end
