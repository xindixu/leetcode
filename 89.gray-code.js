/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = (n) => {
  let result = [0, 1]
  if (n === 1) {
    return result
  }
  for (let i = 2; i <= n; i++) {
    const add = 1 << (i - 1)
    const prependOne = result.map((num) => num + add)
    result = [...result, ...prependOne.reverse()]
  }
  return result
}
// @lc code=end

const parseBinToDec = (n) => parseInt(n, 2)
/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode2 = (n) => {
  let result = ["0", "1"]
  if (n === 1) {
    return result.map(parseBinToDec)
  }
  for (let i = 2; i <= n; i++) {
    const prependZero = result.map((num) => `0${num}`)
    const prependOne = result.map((num) => `1${num}`)
    result = [...prependZero, ...prependOne.reverse()]
  }
  return result.map(parseBinToDec)
}
