/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start

const countNumOfSmallerItems = (matrix, num) => {
  const n = matrix.length
  let i = 0
  let j = n - 1
  let count = 0

  // start from bottom left corner
  while (i < n && j >= 0) {
    if (matrix[i][j] < num) {
      count += j + 1
      i += 1
    } else {
      j -= 1
    }
  }
  return count
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  const n = matrix.length

  // number in the matrix
  let lo = matrix[0][0]
  let hi = matrix[n - 1][n - 1]

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const numOfSmallerItems = countNumOfSmallerItems(matrix, mid)
    if (numOfSmallerItems < k) {
      // numOfSmallerItems needs to be bigger -> mid needs to be bigger
      lo = mid + 1
    } else if (numOfSmallerItems === k) {
      // continue going down until we find a number in the matrix that's kth smallest
      hi = mid - 1
    } else if (numOfSmallerItems > k) {
      // numOfSmallerItems needs to be smaller -> mid needs to be smaller
      hi = mid - 1
    }
  }
  return hi
}

// @lc code=end

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest2 = (matrix, k) => {
  const n = matrix.length

  if (k === 1) {
    return matrix[0][0]
  }
  if (k === n * n) {
    return matrix[n - 1][n - 1]
  }

  // For i-th row, check item at search[i]
  const search = [...new Array(n)].fill(0)

  let i = -1
  let curNum = Number.MIN_SAFE_INTEGER

  // It terminates when i + 1 === k. At this point, curNum is the kth smallest item
  while (i + 1 < k) {
    // Each time, check every row to find the smallest item greater than curNum
    let curMin = Number.MAX_SAFE_INTEGER
    let curMinR
    let curMinC
    for (let r = 0; r < n; r++) {
      const c = search[r]
      // Skip if all els in this row are checked
      if (c >= n) continue

      const num = matrix[r][c]
      if (num < curMin) {
        curMin = num
        curMinR = r
        curMinC = c
      }
    }

    // update search arr
    search[curMinR] = curMinC + 1
    curNum = curMin
    i++
  }
  return curNum
}
