/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start

const MAP = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits === "") {
    return []
  }

  const results = []

  const backtrack = (local, start) => {
    if (local.length === digits.length) {
      results.push(local)
      return
    }

    const possibleChars = MAP[digits.charAt(start)]
    for (const char of possibleChars) {
      backtrack(`${local}${char}`, start + 1)
    }
  }

  backtrack("", 0)
  return results
}

// @lc code=end

// backtrack
// Time: O(4^n * n)
// 4^n since max num of letters for each digit is 4. A tree with n levels and each level has max 4 branches
// For each combination, it cost n to build it (since n digit, each digit is one letter)
// Space: O(n)
const MAP_ARR = {
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
const letterCombinations2 = (digits) => {
  const { length } = digits
  if (length === 0) {
    return []
  }
  const result = []

  const backtrack = (local, index) => {
    const possibles = MAP_ARR[digits[index]]
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
