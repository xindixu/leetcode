/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Recursively
// Input a node `head`, reverse the list staring with `head`, return the new head after reversing
const reverseHelper = (head) => {
  // If it is the last node, no need to reverse anything, and the new head after reversing is itself
  if (head.next == null) {
    return head
  }

  // 1 -> [ 2 <- 3 <- 4 <- 5 ]
  //       next           newHead
  //  reverse the rest of the list
  const newHead = reverseHelper(head.next)
  const { next } = head
  //  1  <-  2
  // head  next
  next.next = head
  head.next = null

  // return the the new head after reversing
  return newHead
}

const reverseList = (head) => {
  if (!head) {
    return null
  }
  return reverseHelper(head)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iteratively
const reverseList2 = (head) => {
  let prev = null
  let cur = head
  while (cur) {
    const { next } = cur
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
// @lc code=end
