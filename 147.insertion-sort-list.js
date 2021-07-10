/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const findCorrectPosition = (sorted, cur) => {
  let correct = sorted.next
  let prevOfCorrect = sorted

  while (correct !== cur && correct.val < cur.val) {
    prevOfCorrect = correct
    correct = correct.next
  }
  return { correct, prevOfCorrect }
}

const findLastOfSorted = (head, cur) => {
  let lastOfSorted = head
  while (lastOfSorted.next !== cur) {
    lastOfSorted = lastOfSorted.next
  }
  return lastOfSorted
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = (head) => {
  const sorted = new ListNode(0, head)

  let cur = head

  while (cur) {
    const { next } = cur

    // figure out the correct position for cur
    const { correct, prevOfCorrect } = findCorrectPosition(sorted, cur)

    if (correct !== cur) {
      // insert cur into the correct position
      const lastOfSorted = findLastOfSorted(head, cur)

      prevOfCorrect.next = cur
      cur.next = correct
      lastOfSorted.next = next
    }

    cur = next
  }

  return sorted.next
}
// @lc code=end
