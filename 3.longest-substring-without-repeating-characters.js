/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0

  let l = 0
  let r = 0
  const dict = {}
  let maxLength = 0

  while (r < s.length) {
    const charAdded = s.charAt(r)
    if (dict[charAdded] || dict[charAdded] === 0) {
      l = Math.max(l, dict[charAdded] + 1)
    }
    maxLength = Math.max(maxLength, r - l + 1)
    dict[charAdded] = r

    r++
  }
  return maxLength
}
// @lc code=end
