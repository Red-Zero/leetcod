/* 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：
输入：n = 2
输出：2
示例 2：
输入：n = 7
输出：21
示例 3：
输入：n = 0
输出：1
提示：
0 <= n <= 100
注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
-----------------------------------------------------------------------
斐波拉契数列.....
简单说一下，设f[n]为到达n级的最多跳法，由题目得知，由于青蛙每次只能1级 或者 2级，所以要到达第n级，必须先到达n-1 或者 n-2级
则可以推断 f[n]=f[n-1]+f[n-2]。。。。。。。。。。。。。。
不过初始状态稍微不同，f[0]=1,f[1]=1
*/


/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    const m = 1000000007
       let x=1,y=1,z=0
       if(n==0) return x
       if(n==1 )return y
       for(let i =2;i<=n;++i){
          z = (x+y) % m
          x = y
          y=z 
       }
       return z
   };