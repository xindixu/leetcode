/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start

let successor = null
// Input int `n`, reverse the first n nodes, return the new head
const reverseFirstN = (head, n) => {
  // When n = 1, nothing to reverse, and the new head is itself
  if (n === 1) {
    //   Save the n+1 th node
    successor = head.next
    return head
  }

  const { next } = head
  //   1 -> [ 2 <- 3 ]          4 -> 5
  //  head  next  newHead  successor
  const newHead = reverseFirstN(next, n - 1)
  // 1 <- 2
  next.next = head
  // 4 <- 1
  head.next = successor

  return newHead
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  if (left === 1) {
    return reverseFirstN(head, right)
  }
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}

// @lc code=end
