/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start

// 1. Start with the widest => left right edge
// 2. All other containers are less wide so it needs to be higher
// 3. The smaller line is doesn't support higher water level so remove it to consider other edges

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let l = 0
  let r = height.length - 1
  let maxArea = 0

  while (l < r) {
    const w = r - l
    const h = Math.min(height[l], height[r])
    const area = w * h
    maxArea = Math.max(maxArea, area)

    if (height[l] < height[r]) {
      l += 1
    } else {
      r -= 1
    }
  }

  return maxArea
}
// @lc code=end
