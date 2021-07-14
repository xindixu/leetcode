/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
// 1. Hash map: element -> frequency. Make it into an array
// 2. Apply quick select on the frequency array

const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const partition = (array, lo, hi) => {
  const pivot = array[lo][1]
  let i = lo
  let j = hi + 1

  while (true) {
    while (array[++i][1] < pivot) {
      if (i === hi) {
        break
      }
    }
    while (array[--j][1] > pivot) {
      if (j === lo) {
        break
      }
    }

    if (i >= j) {
      break
    }

    swap(array, i, j)
  }
  swap(array, lo, j)
  return j
}

const quickSelect = (array, lo, hi, k) => {
  if (lo === hi) {
    return
  }

  const pivot = partition(array, lo, hi)

  if (pivot === k) {
    return
  }
  // too far on the left side (the pivot element's frequency is too small)
  if (pivot < k) {
    quickSelect(array, pivot + 1, hi, k)
  } else {
    quickSelect(array, lo, pivot - 1, k)
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const n = nums.length
  if (k === n) {
    return nums
  }

  const map = new Map()

  nums.forEach((num) => {
    if (map.get(num) !== undefined) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  })

  const array = Array.from(map)
  const m = array.length
  quickSelect(array, 0, m - 1, m - k)

  return array.slice(m - k).map(([num]) => num)
}
// @lc code=end
