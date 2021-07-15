/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  // convert them all to strings
  const strs = nums.map((num) => `${num}`)

  // uses a custom comparator

  // [34323,3432] -> 34323 3432
  // [3432,34323] -> 3432 34323 -> larger

  // The straight-forward way to sort them is by concating them in two different ways and compare
  strs.sort((a, b) => {
    const order1 = `${a}${b}`
    const order2 = `${b}${a}`

    if (order1 > order2) {
      return -1
    }
    if (order1 < order2) {
      return 1
    }
    return 0
  })

  if (strs[0] === "0") {
    return "0"
  }

  return strs.reduce((memo, str) => `${memo}${str}`, "")
}
// @lc code=end
