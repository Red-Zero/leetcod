/*剑指 Offer 22. 链表中倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
示例：
给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
--------------------------------------------------------------
题解:用快慢指针或者一个递归就ok，递归会快一点
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 let index = -1
 //正常递归,耗时88ms
 var getKthFromEnd = function(head, k) {
     index = -1
     return getValue(head,k)
};
function getValue(head,k){
    let val = null
    if(head.next){
        val = getValue(head.next,k)
    }else{
        index  = 1
    }
    if(index == k) {
         val = head
    }
        index ++
        return val
}

//快慢指针，耗时112ms
var getKthFromEnd_qs = function(head, k) {
    let a,b =head
  let q,s = 0
  while(a.next){
      q++
      a = a.next
      if(q>=k){
          s ++
          b=b.next
      }
  }
  return b 
};