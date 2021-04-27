/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0
  let right = s.length - 1

  // stop at :
  // x x x    or x x x x
  // l   r         l r
  while (left < right) {
    while (!/[a-zA-Z0-9]/.test(s.charAt(left)) && left < s.length) {
      left++
    }
    while (!/[a-zA-Z0-9]/.test(s.charAt(right)) && right >= 0) {
      right--
    }

    if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
      return false
    }
    left++
    right--
  }

  return true
}
// @lc code=end
