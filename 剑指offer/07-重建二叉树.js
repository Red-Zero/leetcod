/*输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7
限制：
0 <= 节点个数 <= 5000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
-------------------------------------------------------------------------
题解：
没什么特别好说的，二叉树前序遍历，中序遍历，后序遍历，知道其中两个就能求第三个
已知preorder，inorder,节点数为n
则preorder[0] 必定为根节点，
在inorder[0]找到根节点位置为i，
则inorder[0 -> i-1]为左子树的中序遍历，长度为l，inorder[i+1 -> n]为右子树的中序遍历，长度为r （l+r+1 = n）
preorder[1 -> l] 为左子树的前序遍历，preorder[ l+1 -> r]为右子树的中序遍历
此时问题便变成了求左节点和右节点，分别递归下去就ok了
*/



var buildTree = function(preorder, inorder) {
   return findNode(preorder,inorder)
};
function findNode(p,i){
    if(p.length <1) return null
    let node = {
        val:p[0],
        left:null,
        right:null,
    }
    let rootIndex = i.indexOf(node.val)
    let litree = i.slice(0,rootIndex)
    let ritree = i.slice(rootIndex+1)
    let lpt = p.slice(1,litree.length+1)
    let rpt = p.slice(litree.length+1)
    node.left = findNode(lpt,litree)
    node.right= findNode(rpt,ritree)
    return node
}