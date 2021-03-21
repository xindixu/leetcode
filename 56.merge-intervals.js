/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  const result = []

  let lastMin = intervals[0][0]
  let lastMax = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const [min, max] = intervals[i]

    //       lastMin       lastMax
    //         ｜------------｜
    // min <-----------------|
    // max      |---------------->
    if (min <= lastMax && max >= lastMin) {
      lastMin = Math.min(lastMin, min)
      lastMax = Math.max(lastMax, max)
    } else {
      result.push([lastMin, lastMax])
      lastMin = min
      lastMax = max
    }
  }

  result.push([lastMin, lastMax])
  return result
}
// @lc code=end
