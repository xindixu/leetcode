/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
// 1. When to collapse the window
//    When window size >= s1.length
// 2. How to update the state when adding/removing char
//    Increment/decrement charInWindow count
//    Check if # of char in window === # of char needed
// 3. What's "valid"?
//    validLettersCount === uniqueLettersCount

//    Permutation:
//    - s1.length === window.length
//    - # of unique chars in s1 === # of unique chars in s2
//    - # of each char === # of each char
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  const charNeeded = s1.split("").reduce((memo, cur) => {
    memo[cur] = (memo[cur] || 0) + 1
    return memo
  }, {})

  const charInWindow = {}

  const uniqueLettersCount = Object.keys(charNeeded).length
  let validLettersCount = 0

  let left = 0
  let right = 0

  while (right < s2.length) {
    // item added to the window
    const charAdded = s2.charAt(right)
    // expand the window
    right++

    // update window related state
    if (charAdded in charNeeded) {
      charInWindow[charAdded] = (charInWindow[charAdded] || 0) + 1
      if (charInWindow[charAdded] === charNeeded[charAdded]) {
        validLettersCount++
      }
    }

    // check if we should collapse the window
    // if the window is bigger than s1.length, we should collapse the window
    while (right - left >= s1.length) {
      // check if is it a valid window
      if (validLettersCount === uniqueLettersCount) {
        return true
      }

      const charRemoved = s2.charAt(left)
      left++
      // update window related state
      if (charRemoved in charNeeded) {
        if (charInWindow[charRemoved] === charNeeded[charRemoved]) {
          validLettersCount--
        }
        charInWindow[charRemoved] = (charInWindow[charRemoved] || 1) - 1
      }
    }
  }
  return false
}
// @lc code=end

const slidingWindow = (string) => {
  let left = 0
  let right = 0
  while (right < string.length) {
    // item added to the window
    const charAdded = string.charAt(right)
    // expand the window
    right++

    // update window related state here
    // ......

    while (shouldCollapse()) {
      // save current window
      const charRemoved = string.charAt(left)
      left++

      // update window related state
      // ......
      // note that here should update shouldCollapse()
    }
  }
}
