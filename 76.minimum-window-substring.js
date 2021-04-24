/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
// sliding window:
// desireable window: window contains all characters in t
// l & r both start at 0:
// - r move right to expand the window so that we get to a desireable window
// - l move right to collapse the window so that we can minimize the window

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const charNeeded = t.split("").reduce((memo, c) => {
    memo[c] = (memo[c] || 0) + 1
    return memo
  }, {})
  const charInWindow = {}

  const distinctLettersCount = Object.keys(charNeeded).length
  let validLettersCount = 0

  let l = 0
  let r = 0

  // smallest substring results
  let start = 0
  let length = Number.MAX_SAFE_INTEGER

  // expand window
  while (r < s.length) {
    // item added to the window
    const charAdded = s.charAt(r)
    r++

    // update window
    if (charAdded in charNeeded) {
      charInWindow[charAdded] = (charInWindow[charAdded] || 0) + 1
      if (charInWindow[charAdded] === charNeeded[charAdded]) {
        validLettersCount++
      }
    }

    // collapse window if we've found a desireable window
    while (validLettersCount === distinctLettersCount) {
      // save the smallest substring result
      const curLength = r - l
      if (curLength < length) {
        length = curLength
        start = l
      }

      // collapse window to find an optimal window
      // item removed from the window
      const charRemoved = s.charAt(l)
      l++

      // update window
      if (charRemoved in charNeeded) {
        if (charInWindow[charRemoved] === charNeeded[charRemoved]) {
          validLettersCount--
        }
        charInWindow[charRemoved] = (charInWindow[charRemoved] || 0) - 1
      }
    }
  }

  return length === Number.MAX_SAFE_INTEGER ? "" : s.substr(start, length)
}
// @lc code=end
