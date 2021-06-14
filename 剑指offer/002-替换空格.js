/*请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."
限制：
0 <= s 的长度 <= 10000
通过次数215,714提交次数282,921
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
----------------------------------------------------------------
题解：
1.js自带replaceAll函数........
执行用时：84 ms, 在所有 JavaScript 提交中击败了52.62%的用户
内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了37.89%的用户
效率还行.........

2.开个空字符串res，遍历原字符串，遇到空格，则在res尾部追加 '%20'，否则追加原字符
执行用时：72 ms, 在所有 JavaScript 提交中击败了95.81%的
用户内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了23.85%的用户
结果和自带的replaceAll函数差不多.....
*/

var function1 = function (s) {
    return s.replaceAll(' ','%20')
};
var function2 = function (s) {
    let res= ""
    for(let item of s){
        if(item === ' '){
            res +='%20'
        }else{
            res +=item
        }
    }
    return res
};

var replaceSpace = function (s) {
     return function2(s)
};