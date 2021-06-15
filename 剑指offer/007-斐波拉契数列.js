/*
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：
输入：n = 2
输出：1
示例 2：
输入：n = 5
输出：5
提示：
0 <= n <= 100
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
----------------------------------------------------------------------------------
题解：就一个单纯的斐波拉契而已，什么递归，dp都可以用，但没必要，不用搞那些花里胡哨的
 */

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  let f = [0,1]
  for(let i =2;i<=n;++i){
      f.push( (f[i-1]+f[i-2]) % 1000000007)
  }
  console.log(f)
  return f[n]
};
var fib_dp = function(n) {
    const m = 1000000007
    let x=0,y=1,z=0
    if(n==0) return x
    if(n==1 )return y
    for(let i =2;i<=n;++i){
       z = (x+y) % m
       x = y
       y=z 
    }
    return z
  };
console.log(fib(81))