/*剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
限制：
0 <= 节点个数 <= 5000
注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/
--------------------------------------------------------------------------------
题解: 令初始结果:res={val:head.val,next:null},然后访问，head.next ,更新结果 res = {val:head.val,next:res}，直到head.next为空

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null
    return setList(head,null)
};
function setList(node,res){
    res = {val:node.val,next:res}
    if(node.next){
        res= setList(node.next,res)
    }
    return res
}