/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start

const swapString = (str, a, b) => {
  const arr = [...str]
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
  return arr.join("")
}
/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = (S) => {
  let left = 0
  let right = S.length - 1

  // Last iteration:
  // x x x  or x x x x
  // l   r       l r
  while (left < right) {
    if (/[a-zA-Z]/.test(S.charAt(left)) && /[a-zA-Z]/.test(S.charAt(right))) {
      // swap left right
      S = swapString(S, left, right)
      left++
      right--
    } else {
      if (!/[a-zA-Z]/.test(S.charAt(left))) {
        left++
      }
      if (!/[a-zA-Z]/.test(S.charAt(right))) {
        right--
      }
    }
  }

  return S
}
// @lc code=end
