/*剑指 Offer 25. 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：
0 <= 链表长度 <= 1000
注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*剑指 Offer 25. 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：
0 <= 链表长度 <= 1000
注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/
-----------------------------------------------------------------------------------
题解：基本链表操作，没什么特别好说的
*/

var mergeTwoLists = function (l1, l2) {
    return pushList(null, l1, l2)

};

function pushNode(list, val) {
    if (!list && (!val && val != 0)) return null
    if (!list) return { val, next: null }
    if (!val && val != 0) return list
    let node = list
    while (node.next) {
        node = node.next
    }
    node.next = { val, next: null }
    return list
}
function pushList(list, l1, l2) {
    //console.log(l1,l2,list)
    if (!l1 && !l2) return list
    if (l1 && (!l2 || l1.val < l2.val)) {
        list = pushNode(list, l1.val)
        l1 = l1.next
        list = pushList(list, l1, l2)
    } else {
        if (l2 && (!l1 || l1.val >= l2.val)) {
            list = pushNode(list, l2.val)
            l2 = l2.next
            list = pushList(list, l1, l2)
        }
    }
    return list
}