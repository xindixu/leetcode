/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
const sortNumber = (nums) => nums.sort((a, b) => parseInt(a) - parseInt(b))
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  const children = sortNumber(g)
  const cookies = sortNumber(s)

  let p = 0
  let q = 0
  let count = 0

  while (p < children.length && q < cookies.length) {
    if (children[p] <= cookies[q]) {
      count++
      p++
      q++
    } else {
      q++
    }
  }
  return count
}
// @lc code=end
