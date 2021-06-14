/*输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
示例 1：
输入：head = [1,3,2]
输出：[2,3,1]
限制：
0 <= 链表长度 <= 10000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
------------------------------------------------------------------------
题解：
解法1,开一个栈，每次入栈node.val，然后node=node.next，最后依次pop就好，不过试了一下，太慢了
解法2，递归到最后，顺序返回就好
PS：记得判断head == null
*/



var reversePrint = function(head) {
 let res = []
 overthrow(head,res)
 return res
}

function overthrow(head,res){
    if(!head)return
    if(head.next){
        overthrow(head.next,res)
    }
    res.push(head.val)
}