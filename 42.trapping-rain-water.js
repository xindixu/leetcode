/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  // Dynamic programming with only one maxLeft and maxRight
  // We only need one maxLeft and maxRight

  const { length } = height
  let total = 0

  let maxLeft = 0
  let maxRight = 0
  let left = 1
  let right = length - 2

  for (let i = 1; i < length - 1; i++) {
    let rainInCur
    // go left
    if (height[left - 1] < height[right + 1]) {
      maxLeft = Math.max(maxLeft, height[left - 1])
      rainInCur = maxLeft - height[left]

      left++
    }
    // go right
    else {
      maxRight = Math.max(maxRight, height[right + 1])
      rainInCur = maxRight - height[right]
      right--
    }
    if (rainInCur > 0) {
      total += rainInCur
    }
  }

  return total
}
// @lc code=end

// Time: O(n^2)
// Space: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
const trap2 = (height) => {
  // brute force
  // For each col, compute the rain at that col by:
  // Find the maxLeft & maxRight
  // rainInCur = min(maxLeft, maxRight) - cur

  let total = 0

  const findMaxLeft = (i) => {
    let max = 0
    for (let j = 0; j < i; j++) {
      max = Math.max(max, height[j])
    }
    return max
  }

  const findMaxRight = (i) => {
    let max = 0
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, height[j])
    }
    return max
  }

  for (let i = 1; i < height.length - 1; i++) {
    const cur = height[i]
    const maxLeft = findMaxLeft(i)
    const maxRight = findMaxRight(i)

    const rainInCur = Math.min(maxLeft, maxRight) - cur
    if (rainInCur > 0) {
      total += rainInCur
    }
  }

  return total
}

// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
const trap3 = (height) => {
  // Dynamic programming
  // We don't have to recompute maxLeft and maxRight all from the start
  // maxLeft[i] = max(maxLeft[i-1], height[i-1])
  const { length } = height
  let total = 0

  const maxLefts = new Array(length).fill(0)
  const maxRights = new Array(length).fill(0)

  for (let i = 1; i < length; i++) {
    maxLefts[i] = Math.max(maxLefts[i - 1], height[i - 1])
  }

  for (let i = length - 2; i >= 0; i--) {
    maxRights[i] = Math.max(maxRights[i + 1], height[i + 1])
  }

  // Definitely no water on the edge columns
  for (let i = 1; i < height.length - 1; i++) {
    const cur = height[i]
    const maxLeft = maxLefts[i]
    const maxRight = maxRights[i]

    const rainInCur = Math.min(maxLeft, maxRight) - cur
    if (rainInCur > 0) {
      total += rainInCur
    }
  }

  return total
}
