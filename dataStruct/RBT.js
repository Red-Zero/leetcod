class Node {
    constructor(val) {
        this.val = val
        this.color = 'Red'
        this.left = null
        this.right = null
    }
}
class RBT {
    /*二叉平衡树*/
    //基本操作:左旋
    turnLeft(tree) {
        let tmp = tree.right
        tree.right = tmp.left
        tmp.left = tree
        return tmp
    }
    //基本操作:左旋
    turnRight(tree) {
        let tmp = tree.left
        tree.left = tmp.right
        tmp.right = tree
        return tmp
    }
    //重置颜色
    reColor(tree) {
        //不处理
        if (!tree || tree.color == 'R' || (!tree.left && !tree.right)) return tree
        //新节点添加到了子树左节点
        if (!tree.right || tree.right.color == 'B') {
            //父亲为黑色，儿子为黑色不处理
            if (!tree.left || tree.left.color == 'B') return tree

            //父亲为黑色，左儿子为红色，左儿子的右孙子为红色，左儿子为空
            if (tree.left.right && tree.left.right.color == 'R') {
                //左旋字节点处理为：父亲为黑色，儿子为红色，左儿子的左儿子为红色，左儿子的右孙子为空
                tree.left = this.turnLeft(tree.left)
            }
            //父亲为黑色，儿子为红色，左儿子的左左儿子为红色，左儿子的右孙子为空
            if (tree.left.left && tree.left.left.color == 'R') {
                tree = this.turnRight(tree)
                tree.color = 'B'
                tree.left.color = 'R'
                tree.right.color = 'R'
                return tree
            }
        }
        //新节点添加到了子树右节点
        if(!tree.left || tree.left.color == 'B'){
              //父亲为黑色，儿子为黑色不处理
            if(!tree.right || tree.right.color =='B') return tree
             //父亲为黑色，右儿子为红色，右右儿子的左儿子为红色，右儿子的右儿子儿子为空
             if (tree.right.left && tree.right.left.color == 'R') {
                //左旋字节点处理为：父亲为黑色，右儿子为红色，右儿子的右儿子为红色，右儿子的左儿子为空
                tree.right =this.turnRight(tree.right)
            }
            //父亲为黑色，右儿子为红色，右儿子的右儿子为红色，右儿子的左儿子为空
            if (tree.right.right && tree.right.right.color == 'R') {
                tree = this.turnLeft(tree)
                tree.color = 'B'
                tree.left.color = 'R'
                tree.right.color = 'R'
                return tree
            }
        }
        //父亲节点为黑色，左右儿子均为红色，且存在孙子节点为红色
        if(tree.color == 'B' && tree.left && tree.left.color == 'R' && tree.right && tree.right =='R'){
            if(tree.left.left && tree.left.left.color == 'R' || 
               tree.left.right && tree.left.right.color == 'R' || 
               tree.right.left && tree.right.left.color == 'R' || 
               tree.right.right && tree.right.right.color == 'R'){
                tree.color= 'R'
                tree.left.color ='B'
                tree.right.color= 'B'
                return tree
            }

        }
        //新节点添加到子树右节点
        return tree
    }
    insert(tree,node){
         tree = this.add(tree,node)
         tree.color = 'B'
         return tree
    }
    //添加节点
    add(tree, node) {
        if (!node) return null
        //console.log('insert',node.val)
        if (!tree) return node;
        if (node.val < tree.val) {
            if (!tree.left) { tree.left = node } else { tree.left = add(tree.left, node) }
        } else {
            if (!tree.right) { tree.right = node } else { tree.right = add(tree.right, node) }
        }
        //旋转变色处理
        tree =this.reColor(tree)
        return tree
    }
}
