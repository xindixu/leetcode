/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start

const reverseLinkedList = (head) => {
  if (head == null || head.next == null) {
    return head
  }
  const { next } = head
  const newHead = reverseLinkedList(next)
  next.next = head
  head.next = null
  return newHead
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 1. use slow fast pointer to find the starting point of the right section
// 2. reverse the right section
// 3. compare
// 4. recover the right section
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let slow = head
  let fast = head
  let prev = null

  while (fast != null && fast.next != null) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }

  // Even:
  // 1 -> 2 -> 2 -> 1 -> null
  //      p    s          f
  // Odd:
  // 1 -> 2 -> 1 -> null
  // p    s    f

  if (fast != null) {
    prev = slow
    slow = slow.next
  }

  const lastNode = reverseLinkedList(slow)
  let left = head
  let right = lastNode

  // check if left right sections are the same
  while (left != null && right != null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }

  // reverse the right section

  const startOfRightSection = reverseLinkedList(lastNode)
  prev.next = startOfRightSection

  return true
}
// @lc code=end
