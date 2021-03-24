/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start

const isPalindrome = (string) => {
  let left = 0
  let right = string.length - 1
  while (left < right) {
    if (string.charAt(left) !== string.charAt(right)) {
      return false
    }
    left++
    right--
  }
  return true
}

// (s,e)                               "aab"
// layer 1:
//                    (0,0)  "a"          (0,1)  "aa"        (0,2)  "b"
// layer 2:
//              (1,1)  "a"   (1,2) "ab"   (2,2) "b"
// layer 3:
//            (2,2) "b"
// result:
//         ["a","a","b"]              ["aa","b"]
/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = (s) => {
  const n = s.length
  const results = []

  const backtrack = (local, start) => {
    if (local.join("") === s) {
      results.push([...local])
      return
    }

    for (let end = start; end < n; end++) {
      const substring = s.substring(start, end + 1)
      if (isPalindrome(substring)) {
        backtrack([...local, substring], end + 1)
      }
    }
  }
  backtrack([], 0)

  return results
}
// @lc code=end
