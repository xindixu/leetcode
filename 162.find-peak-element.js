/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start

const getIsBiggerThanLeft = (arr, index) => {
  const lastIndex = arr.length - 1

  if (index === 0) {
    return true
  }
  if (index === lastIndex) {
    return arr[lastIndex] > arr[lastIndex - 1]
  }
  return arr[index] > arr[index - 1]
}

const getIsBiggerThanRight = (arr, index) => {
  const lastIndex = arr.length - 1

  if (index === 0) {
    return arr[0] > arr[1]
  }
  if (index === lastIndex) {
    return true
  }
  return arr[index] > arr[index + 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    const isBiggerThanLeft = getIsBiggerThanLeft(nums, mid)
    const isBiggerThanRight = getIsBiggerThanRight(nums, mid)

    if (isBiggerThanLeft && isBiggerThanRight) {
      return mid
    }

    if (isBiggerThanLeft) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return hi
}
// @lc code=end
