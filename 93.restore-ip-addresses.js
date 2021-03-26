/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start

const isValid = (nums, s) => nums.length === 4 && nums.join("") === s
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  if (s.length < 4 || s.length > 4 * 3) {
    return []
  }
  const results = []
  const selected = {}

  const backtrack = (local, start) => {
    if (isValid(local, s)) {
      const string = local.join(".")
      if (!selected[string]) {
        results.push(string)
        selected[string] = true
      }
      return
    }

    if (start >= s.length) {
      return
    }

    // 1 digit
    backtrack([...local, s.substr(start, 1)], start + 1)
    // 2 digits
    if (s.charAt(start) === "0") {
      return
    }
    backtrack([...local, s.substr(start, 2)], start + 2)

    const threeDigits = s.substr(start, 3)
    if (threeDigits > "255") {
      return
    }
    // 3 digits
    backtrack([...local, s.substr(start, 3)], start + 3)
  }

  backtrack([], 0)
  return results
}
// @lc code=end
