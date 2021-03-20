/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  // 1 2 3 4 5 6 7 | 1 2 3, k = 3
  const { length: n } = nums
  k %= n

  let numOfRotates = 0
  let startIdx = 0

  // 1. there're only n numbers, we need to rotate at most n times
  while (numOfRotates < n) {
    let curIdx = startIdx
    let cur = nums[curIdx]

    // 2. for each startIdx, use cyclic replacements
    // when curIndex == start, we've rotated back to the original spot
    do {
      const nextIdx = (curIdx + k) % n
      const next = nums[nextIdx]
      nums[nextIdx] = cur

      // updates
      curIdx = nextIdx
      cur = next
      numOfRotates++
    } while (curIdx !== startIdx)
    startIdx++
  }
}
// @lc code=end
