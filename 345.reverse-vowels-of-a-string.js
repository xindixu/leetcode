/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start

// 1. Make str into an array
// 2. Two pointer start from both sides
// 3. While condition left < right
// 4. Inside while loop:
// 4.1 what's the condition to swap, swap + update pointers
// 4.2 what's the condition not to swap, update pointer(s)
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  s = s.split("")
  let left = 0
  let right = s.length - 1

  const vowels = new Set(["a", "e", "i", "o", "u"])

  while (left < right) {
    if (
      vowels.has(s[left].toLocaleLowerCase()) &&
      vowels.has(s[right].toLocaleLowerCase())
    ) {
      ;[s[left], s[right]] = [s[right], s[left]]
      left++
      right--
    } else if (!vowels.has(s[left].toLocaleLowerCase())) {
      left++
    } else {
      right--
    }
  }

  return s.join("")
}
// @lc code=end
