/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
// O(2^n * 2)
// Backtracking
// Start with n numOfLeft and n numOf right to use
// In each turn, we have at most two choices:
//   - left if numOfLeft > 0
//   - right if numOfRight > 0 and numOfRight > numOfLeft (meaning that there's more left parentheses and we can close them)
// If go left, push "(" and numOfLeft decrement
// If go right, push ")" and numOfRight decrement
// Once numOfLeft and numOfRight are both 0, we are done, save the local result
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = []

  const backtrack = (local, numOfLeft, numOfRight) => {
    if (numOfLeft === 0 && numOfRight === 0) {
      result.push(local)
      return
    }

    if (numOfRight > numOfLeft && numOfRight > 0) {
      // can use right
      backtrack(`${local})`, numOfLeft, numOfRight - 1)
    }

    if (numOfLeft > 0) {
      // can use left
      backtrack(`${local}(`, numOfLeft - 1, numOfRight)
    }
  }

  backtrack("", n, n)
  return result
}
// @lc code=end

const generateParenthesis2 = (n) => {
  const result = []

  const backtrack = (local, numOfLeft, numOfRight) => {
    if (numOfLeft === 0 && numOfRight === 0) {
      result.push(local.join(""))
      return
    }

    if (numOfRight > numOfLeft && numOfRight > 0) {
      // can use right
      local.push(")")
      backtrack(local, numOfLeft, numOfRight - 1)
      local.pop()
    }

    if (numOfLeft > 0) {
      // can use left
      local.push("(")
      backtrack(local, numOfLeft - 1, numOfRight)
      local.pop()
    }
  }

  backtrack([], n, n)
  return result
}
