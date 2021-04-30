/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start

/*
  1. when expanding, need to update:
   - update charsInWindow
   - update numOfUniqueCharsValid
  2. when to collapse the window:
   - window length >= p.length
   previously I've been messing around with different ways but this is the most straightforward condition
  3. when collapsing, need to update:
   - update charsInWindow
   - update numOfUniqueCharsValid
  4. result we want: 
   - starting index (left)
   - update when collapsing + valid
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const charsNeeded = p.split("").reduce((memo, cur) => {
    memo[cur] = (memo[cur] || 0) + 1
    return memo
  }, {})

  const charsInWindow = {}

  const numOfUniqueCharsNeeded = Object.keys(charsNeeded).length
  let numOfUniqueCharsValid = 0

  const results = []
  // sliding window
  let left = 0
  let right = 0

  while (right < s.length) {
    const charAdded = s.charAt(right)
    right++

    // update state
    if (charAdded in charsNeeded) {
      charsInWindow[charAdded] = (charsInWindow[charAdded] || 0) + 1
      if (charsInWindow[charAdded] === charsNeeded[charAdded]) {
        numOfUniqueCharsValid++
      }
    }

    while (right - left >= p.length) {
      if (numOfUniqueCharsValid === numOfUniqueCharsNeeded) {
        // when window is valid: save result
        results.push(left)
      }

      const charRemoved = s.charAt(left)
      left++

      // update state

      if (charRemoved in charsNeeded) {
        if (charsInWindow[charRemoved] === charsNeeded[charRemoved]) {
          numOfUniqueCharsValid--
        }
        charsInWindow[charRemoved] = (charsInWindow[charRemoved] || 0) - 1
      }
    }
  }

  return results
}
// @lc code=end
