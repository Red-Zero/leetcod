/*
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出,小写为标记）。

abcE
SFcS
AdeE

示例 1：
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
提示：
1 <= board.length <= 200
1 <= board[i].length <= 200
board 和 word 仅由大小写英文字母组成
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
题解：emmmmmmmmmmm.......就很典型的dfs
没什么特别好说的，说一下边界条件
1.坐标错过board就直接放回false
2.当前坐标元素和对应的word元素不匹配，直接返回
3.当前坐标元素被使用过，直接返回
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let boardMatrix=[],wordRes="",map={}
var exist = function (board, word) {
    boardMatrix=board
    wordRes=word
    map={}
    for(let i=0;i<board.length;++i){
        for(let j =0;j<board[i].length;++j){
            if( findChar(i,j,0)) return true
        }
    }
    return false
};

function findChar(x, y, index) {
    let key = `x${x}y${y}`
    if(x<0 || x>=boardMatrix.length || y<0 || y>=boardMatrix[x].length || map[key] || boardMatrix[x][y] != wordRes[index]) return false
    //console.log(x,y,boardMatrix[x][y],word[index] )
    //console.log(x,y, boardMatrix[x][y] )
   
        if(index == wordRes.length-1) return true
        index++
        map[key] = 1
        if(findChar(x+1,y,index)) {console.log(1); return true}
        if(findChar(x-1,y,index)) {console.log(2); return true}
        if(findChar(x,y+1,index)) {console.log(3); return true}
        if(findChar(x,y-1,index)) {console.log(4); return true}
        map[key] = 0
        index--
    
    return false
}


let board = [["a","b"],["c","d"]], word = "abcd"
console.log(exist(board,word))