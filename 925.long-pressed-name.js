/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
  let p = 0
  let q = 0

  // s a e d
  //       p
  // s s a a e d d
  //             q
  while (q < typed.length) {
    if (name.charAt(p) === typed.charAt(q)) {
      p++
    } else if (name.charAt(p - 1) !== typed.charAt(q)) {
      return false
    }
    q++
  }

  return p === name.length && q === typed.length
}
// @lc code=end
