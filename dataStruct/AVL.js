class VAL{
/*二叉平衡树*/
//或取树的高度
 getHeight(tree){
    if(!tree) return 0
    return Math.max(getHeight(tree.left),getHeight(tree.right))+1
}
//或取左右字数高度差
 getdistance(tree){
    return getHeight(tree.left) - getHeight(tree.right)
}
//基本操作:左旋
 turnLeft(tree){
   let tmp = tree.right
   tree.right = tmp.left
   tmp.left = tree
   return tmp
}
//基本操作:左旋
 turnRight(tree){
    let tmp = tree.left
    tree.left = tmp.right
    tmp.right = tree
    return tmp
 }
 //平衡树
  balance(tree){
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
  add(tree,node){
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
}
