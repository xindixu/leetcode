/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start

// swap head with next, return next
const swapPair = (head) => {
  const { next } = head

  if (next == null) {
    return head
  }

  next.next = head
  head.next = null
  return next
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
 * @return {ListNode}
 */
const swapPairs = (head) => {
  if (head == null || head.next == null) {
    return head
  }

  const newHeadOfNextPair = swapPairs(head.next.next)
  const newHeadOfThisPair = swapPair(head)
  // head is now the last node
  // link the last node of this Pair with the head of next Pair
  head.next = newHeadOfNextPair
  return newHeadOfThisPair
}

// @lc code=end
