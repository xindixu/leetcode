/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
// backtrack
const MAP = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const { length } = digits
  if (length === 0) {
    return []
  }
  const result = []

  const backtrack = (local, index) => {
    const possibles = MAP[digits[index]]
    if (index >= length) {
      result.push(local.join(""))
      return
    }
    // go thru each possible letter
    for (const letter of possibles) {
      // add it to local
      local.push(letter)
      // find all possible letters for next digit
      backtrack(local, index + 1)
      // backtrack by removing this letter before moving to the next possible letter
      local.pop()
    }
  }

  backtrack([], 0)
  return result
}
// @lc code=end
