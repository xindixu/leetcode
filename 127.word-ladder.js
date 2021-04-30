/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start

const isDifferByOne = (wordA, wordB) => {
  const wordAArr = wordA.split("").sort()
  const wordBArr = wordB.split("").sort()

  let diff = 0
  for (let i = 0; i < wordAArr.length; i++) {
    if (wordAArr[i] !== wordBArr[i]) {
      diff += 1
    }
  }
  return diff === 1
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return 0
  }
  let min = Number.MAX_SAFE_INTEGER

  const backtrack = (count, begin) => {
    console.log(begin, count)
    if (begin === endWord) {
      min = count
      return
    }

    if (count > wordList.length) {
      return
    }

    for (const candidate of wordList) {
      if (candidate !== begin && isDifferByOne(begin, candidate)) {
        backtrack(count + 1, candidate)
      }
    }
  }

  backtrack(0, beginWord)
  return min
}
// @lc code=end
