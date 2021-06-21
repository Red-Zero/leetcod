/*
给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。
如果有多种构造方法，请你返回任意一种。
示例：
输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
提示：
树节点的数目在 1 到 10^4 之间。
树节点的值互不相同，且在 1 到 10^5 之间。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balance-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
---------------------------------------------------------------
题解：中序遍历之后重新构建AVL树
*/
var balanceBST = function(root) {
    return rebuildTree(null,root)
};
function rebuildTree(tree,node){
    if(!node) return tree
    tree=add(tree,{val:node.val,left:null,right:null})
    if(node.left) tree= rebuildTree(tree,node.left)
    if(node.right) tree= rebuildTree(tree,node.right)
    return tree
}
/*二叉平衡树*/
//或取树的高度
function getHeight(tree){
    if(!tree) return 0
    return Math.max(getHeight(tree.left),getHeight(tree.right))+1
}
//或取左右字数高度差
function getdistance(tree){
    return getHeight(tree.left) - getHeight(tree.right)
}
//基本操作:左旋
function turnLeft(tree){
   let tmp = tree.right
   tree.right = tmp.left
   tmp.left = tree
   return tmp
}
//基本操作:左旋
function turnRight(tree){
    let tmp = tree.left
    tree.left = tmp.right
    tmp.right = tree
    return tmp
 }
 //平衡树
 function balance(tree){
    //或取左右子树的高度差,并平衡高度差超过1的情况
    let d = getdistance(tree)
    //左高右低，右旋    
    if(d>1){
        if(getdistance(tree.left) <0)tree.left = turnLeft(tree.left) 
        //console.log('l',tree.val)
        return turnRight(tree)
    }
    //右高左低，左旋
    if(d<-1){
        if(getdistance(tree.right >0)) tree.right = turnRight(tree.right)
        //console.log('r',tree.val)
        return turnLeft(tree)
    }
    return tree
 }
 //添加节点
 function add(tree,node){
     if(!node) return null
     //console.log('insert',node.val)
     if(!tree) return node;
     if(node.val < tree.val ) {
         if(!tree.left){  tree.left =  node} else {tree.left = add(tree.left,node)}  
     } else{
         if(!tree.right){ tree.right =  node} else{tree.right = add(tree.right,node)}  
    } 
     return balance(tree)
 }