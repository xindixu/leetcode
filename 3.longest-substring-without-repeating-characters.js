/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/*
  1. When adding chars, updates:
    - set of unique chars
  2. When to collapse:
    - when there's duplicated chars, let window starts with that duplicated char
  3. When removing chars, updates:
    - set of unique chars
  4. result 
    - max length
*/
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
    r++

    // collapse
    if (charAdded in dict) {
      l = Math.max(l, dict[charAdded] + 1)
    }
    // update set of unique chars
    dict[charAdded] = r - 1
    // update result
    maxLength = Math.max(maxLength, r - l)
  }
  return maxLength
}
// @lc code=end
