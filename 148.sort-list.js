/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Top down merge sort

// 1 -> 2 -> 3 -> 4 -> 5 -> null
//           s         f
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
//                s               f
// Break the list into to unlinked two linked lists with equal lengths
const getMidPoint = (head) => {
  let slowPrev = null
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slowPrev = slow
    slow = slow.next
  }

  if (fast != null) {
    slowPrev = slow
    slow = slow.next
  }
  // unlink two lists
  slowPrev.next = null
  return slow
}

const merge = (firstHead, secondHead) => {
  const dummy = new ListNode(Number.MIN_SAFE_INTEGER, null)
  let result = dummy
  let firstCur = firstHead
  let secondCur = secondHead

  while (firstCur && secondCur) {
    if (firstCur.val < secondCur.val) {
      result.next = firstCur
      firstCur = firstCur.next
    } else {
      result.next = secondCur
      secondCur = secondCur.next
    }
    result = result.next
  }

  result.next = firstCur || secondCur
  return dummy.next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {
  if (head == null || head.next == null) {
    return head
  }

  const mid = getMidPoint(head)
  const left = sortList(head)
  const right = sortList(mid)
  return merge(left, right)
}
// @lc code=end
