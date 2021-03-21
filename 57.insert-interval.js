/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let [min, max] = newInterval

  const { length } = intervals

  // no need to merge index
  let index

  // need to merge index
  let startIndex
  let endIndex

  let prevOverlap = false

  for (let i = 0; i < length; i++) {
    const interval = intervals[i]
    const [curMin, curMax] = interval

    const overlap = min <= curMax && max >= curMin
    if (overlap) {
      min = Math.min(min, curMin)
      max = Math.max(max, curMax)
    }

    if (overlap && !prevOverlap) {
      prevOverlap = true
      startIndex = i
    }

    if (!overlap && prevOverlap) {
      prevOverlap = false
      endIndex = i
    }

    if (!overlap && min < curMax) {
      index = i
      break
    }
  }

  // check if we need to merge intervals
  // no merge
  if (startIndex === undefined && endIndex === undefined) {
    index = index === undefined ? length : index

    return [
      ...intervals.slice(0, index),
      newInterval,
      ...intervals.slice(index),
    ]
  }

  // merge
  endIndex = endIndex === undefined ? length : endIndex
  return [
    ...intervals.slice(0, startIndex),
    [min, max],
    ...intervals.slice(endIndex),
  ]
}
// @lc code=end
