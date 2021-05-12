/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
const countUnique = (s) => {
  const chars = s.split("").reduce((memo, cur) => {
    if (!memo[cur]) {
      memo[cur] = 1
    }
    return memo
  }, {})
  return Object.keys(chars).length
}

// 1. What to keep track of & when to update that
//    - size of the window = right - left
//    - after expanding the window

// 2. What to do when expanding window
//    - increment num of unique chars
//    - increment num of unique chars that have at least k frequency

// 3. What to do when collapsing window
//    - decrement num of unique chars
//    - decrement num of unique chars that have at least k frequency

// 4. When to collapse the window
//    - numOfUniqueChars > unique

const getMaxLength = (s, unique, k) => {
  let left = 0
  let right = 0

  // helper variables
  let numUniqueChars = 0
  let numUniqueCharsWithAtLeastK = 0
  const chars = {}

  // result to keep track of
  let max = 0

  while (right <= s.length) {
    // expanding window
    const charAdded = s.charAt(right)
    right++

    // increment numUniqueChars & numUniqueCharsWithAtLeastK
    chars[charAdded] = (chars[charAdded] || 0) + 1
    if (chars[charAdded] === 1) {
      numUniqueChars++
    }
    if (chars[charAdded] === k) {
      numUniqueCharsWithAtLeastK++
    }

    // valid window
    if (numUniqueChars === unique && numUniqueCharsWithAtLeastK === unique) {
      max = Math.max(max, right - left)
    }

    while (numUniqueChars > unique) {
      const charRemoved = s.charAt(left)
      left++

      // decrement numUniqueChars & numUniqueCharsWithAtLeastK
      chars[charRemoved]--
      if (chars[charRemoved] === k - 1) {
        numUniqueCharsWithAtLeastK--
      }
      if (chars[charRemoved] === 0) {
        numUniqueChars--
      }
    }
  }
  return max
}

// 1. Find num of unique chars (maxUniqueChars)
// 2. Loop from 1 to maxUniqueChars.
// 3. In each loop, find the max length given the num of unique chars needed (getMaxLength)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
  const maxUnique = countUnique(s)

  const maxes = [...new Array(maxUnique).keys()].map((index) => {
    const curUnique = index + 1
    return getMaxLength(s, curUnique, k)
  })
  return Math.max(...maxes)
}

// @lc code=end
