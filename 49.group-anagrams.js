/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const result = {}

  strs.forEach((str) => {
    const key = str.split("").sort().join("")
    if (result[key]) {
      result[key].push(str)
    } else {
      result[key] = [str]
    }
  })

  return Object.values(result)
}
// @lc code=end
