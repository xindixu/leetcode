/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
// Sorting, use in-place sorting
// Time: O(nlogn)
// Space: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  const array1 = s.split("").sort()
  const array2 = t.split("").sort()

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

// Hashmap
// Time: O(n)
// Space: O(1) for only english letters
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  const array1 = s.split("")
  const array2 = t.split("")

  const map = {}

  array1.forEach((char) => {
    if (map[char] !== undefined) {
      map[char]++
    } else {
      map[char] = 1
    }
  })

  array2.forEach((char) => {
    if (map[char] === undefined || map[char] === 0) {
      return false
    }
    map[char]--
  })

  for (const key in map) {
    if (map[key] !== 0) {
      return false
    }
  }
  return true
}

// @lc code=end
