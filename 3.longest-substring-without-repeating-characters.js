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
    - when there's duplicated chars (dict[charAdded] > 1)
  3. When removing chars, updates:
    - set of unique chars
  4. result 
    - max length
    - do it after collapse. After collapsing, the window should be valid again
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

    // update
    dict[charAdded] = (dict[charAdded] || 0) + 1

    // collapse when there are duplicated chars
    while (dict[charAdded] > 1) {
      const charRemoved = s.charAt(l)
      l++
      // update
      dict[charRemoved]--
    }

    // update result
    maxLength = Math.max(maxLength, r - l)
  }
  return maxLength
}
// @lc code=end
