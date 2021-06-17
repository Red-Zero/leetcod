/* 剑指 Offer 16. 数值的整数次方
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
示例 1：
输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：
输入：x = 2.10000, n = 3
输出：9.26100
示例 3：
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
提示：
-100.0 < x < 100.0
-2^31 <= n <= 2^31-1
-10^4 <= xn <= 10^4
注意：本题与主站 50 题相同：https://leetcode-cn.com/problems/powx-n/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
题解，2分法,
n = 0,return 1
n=1,return x
n= -1 return 1/x
myPow(x,n) = myPow(x,n/2) * myPow(x,n/2) * myPow(x,n%2)
也可以判断一下奇偶，
即n %2 == 0  myPow(x,n) = myPow(x,n/2) * myPow(x,n/2)
  n %2 == 1  myPow(x,n) = myPow(x,n/2) * myPow(x,n/2) * x
PS:用一个变量存一下 myPow(x,n/2)，减少一下递归的次数，不然会超时
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    console.log(n)
    if (n == 0) return 1
    if (n == 1) return x
    if (n == -1) return 1 / x
    let num = myPow(x, parseInt(n / 2))
    return num * num *myPow(x,n%2)
};

console.log(myPow(34.00515, -3))