/*
剑指 Offer 17. 打印从1到最大的n位数
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
示例 1:
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
说明：
用返回一个整数列表来代替打印
n 为正整数
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
------------------------------------------------------------------
题解: 简单分析可以得到，最大值为10^n-1，所以只需求出10^n，然后从1开始打印就好

PS:评论区有看到求1-n的全排列的............emmmmmmmmmmmmm，怎么说呢，算了，我无话可说
*/
/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
     let max=1
     for(let i=0;i<n;++i){
         max *=10
     }
     let f=[]
     for(i=1;i<max;++i){
         f.push(i)
     }
     return f
};