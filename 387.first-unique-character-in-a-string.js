/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  // first, count how many times a character appear in a string
  const arr = s.split("")
  const numByChar = arr.reduce((memo, cur) => {
    if (memo[cur]) {
      memo[cur]++
    } else {
      memo[cur] = 1
    }
    return memo
  }, {})

  let result = -1
  // Second, go through each char in the string to find the first unique character
  arr.some((char, index) => {
    if (numByChar[char] === 1) {
      result = index
      return true
    }
    return false
  })

  return result
}
// @lc code=end
