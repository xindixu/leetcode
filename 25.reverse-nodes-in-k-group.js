/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
let successor = null
const reverseFirstNRecursive = (head, n) => {
  if (n === 1) {
    successor = head.next
    return head
  }

  const { next } = head
  const newHead = reverseFirstNRecursive(next, n - 1)
  next.next = head
  head.next = successor
  return newHead
}

const reverseFirstNIterative = (head, n) => {
  let prev = null
  let cur = head
  for (let i = 0; i < n; i++) {
    const { next } = cur
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  // find next head (k+1 th node)
  let nextHead = head

  for (let i = 0; i < k; i++) {
    // Not enough elements left, no need to reverse anything, so just return the head
    if (nextHead == null) {
      return head
    }
    nextHead = nextHead.next
  }

  // Reverse the first k node
  const newHead = reverseFirstNIterative(head, k)

  // Reverse the next group
  const newHeadOfNextGroup = reverseKGroup(nextHead, k)
  // Link them together
  // After reversing the first group, head will become the last node
  head.next = newHeadOfNextGroup
  return newHead
}
// @lc code=end
