/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
const TimeMap = function () {
  this.timeMap = {}
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.timeMap[key]) {
    this.timeMap[key].push({ value, timestamp })
  } else {
    this.timeMap[key] = [{ value, timestamp }]
  }
}

const findUpperBound = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const num = nums[mid].timestamp

    if (num < target) {
      // go right to find the upper bound
      // [mid + 1, hi]
      lo = mid + 1
    } else if (num === target) {
      // go right to find the upper bound
      // [mid + 1, hi]
      lo = mid + 1
    } else {
      // too high, go left
      // [lo, mid - 1]
      hi = mid - 1
    }
  }

  // range for hi is [-1, nums.length - 1]
  if (hi < 0 || nums[hi].timestamp > target) {
    return -1
  }
  return hi
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const array = this.timeMap[key]
  if (array.length === 0) {
    return ""
  }

  const index = findUpperBound(array, timestamp)
  if (index === -1) {
    return ""
  }
  return array[index].value
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
