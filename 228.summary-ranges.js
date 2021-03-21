/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start

const parse = (arr) =>
  arr.map(([min, max]) => (min === max ? `${min}` : `${min}->${max}`))

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const result = []
  let min
  let max

  for (const num of nums) {
    if (num === max + 1) {
      max = num
    } else {
      result.push([min, max])
      min = num
      max = num
    }
  }

  result.push([min, max])

  return parse(result.slice(1))
}
// @lc code=end
