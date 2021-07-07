/*
 * @lc app=leetcode id=436 lang=javascript
 *
 * [436] Find Right Interval
 */

// @lc code=start

const findLowerBound = (array, target, startIndex) => {
  let lo = startIndex
  let hi = array.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const { start } = array[mid]
    if (start < target) {
      lo = mid + 1
    } else if (start === target) {
      hi = mid - 1
    } else {
      hi = mid - 1
    }
  }

  // Range for lo: [startIndex, array.length]
  // - When terminates with hi = array.length - 1, lo = hi + 1
  if (lo >= array.length || array[lo].start < target) {
    return -1
  }
  return lo
}
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = (intervals) => {
  const sorted = intervals
    .map((interval, index) => ({
      start: interval[0],
      end: interval[1],
      index,
    }))
    .sort((a, b) => a.start - b.start)

  const answer = new Array(intervals.length).fill(-1)

  sorted.forEach(({ end, index }, sortedIndex) => {
    // find right interval in sorted, starting sortedIndex + 1
    const lowerBoundIndexInSorted = findLowerBound(sorted, end, sortedIndex)
    if (lowerBoundIndexInSorted === -1) {
      answer[index] = -1
    } else {
      answer[index] = sorted[lowerBoundIndexInSorted].index
    }
  })
  return answer
}
// @lc code=end
