/*
请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
示例 1:
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3:
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
示例 4:
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
示例 5:
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母以及字符 . 和 *，无连续的 '*'。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
--------------------------------------------------------------------------------------
动态规划,被边界条件绕晕绕吐了.........................╥﹏╥...

首先，我们把字符判等规则改一下： equalChar =>  return  charp === '.' || chars === charp 
这个比较好理解，由于s串中不能出现'.'  
所以，只要两个字符相同，或者p串等字符为'.'则两个字符相等

设 s长度为n,p长度为m ,f[i][j](0<=i<=n,0<=j<=m) 表示s到前i个字符 和 p的前j个字符是否匹配，默认false,

~~~~~~~~~边界1:因为s和p 是可以为空的，所以 i,j可以等0， f[0][0] 表示s到前0个字符(即空)和 p的前0个字符(即空)是否匹配,很明显f[0][0] == true

判断f[i][j],能否匹配分两种情况
情况1：p[j-1] 不为 * 
    这在情况下，首先p[j-1] 和 s[i-1] 必须相等，即 equalChar(s[i - 1], p[j - 1]) 为true
    若，equalChar(s[i - 1], p[j - 1])为false,则f[i][j]必不可能匹配
    equalChar(s[i - 1], p[j - 1]) 为true 的前提下:
    
    1.若如果p[j-1]  <> * 且 f[i-1][j-1] 为true，则f[i][j] 为true,
     即:s的前i-1个字符，和p的前j-1个字符匹配，且 s[i]，p[j]相等, s的前i个字符和p的前j个字符匹配
~~~~~~~~~~~~~边界:i>0,j>0
    2.还有一种情况,如果 p[j-1] == *,这个时候我们可以忽略掉 p[j-1]和p[j-2]， 直接看f[i-1][j-3],
     即 f[i - 1][j - 3]  为true，则f[i][j] 为true
~~~~~~~~~~~~~边界:i>0,j>2
      为什么不看f[i-1][j-2]呢，因为[j-1] 为* ,如果f[i-1][j-2]为true，则f[i-1][j-1]也为true，这可以看作第一种情况

情况2：p[j-1] 为 * 
   1. 此时可以把 p[j-1]p[j-2] 视为空, 此时，若f[i][j - 2]  为true， 则f[i][j] 为true
 ~~~~~~~~~~边界条件，j>2
   2. 把p[j-1]p[j-2] 视为非空, 此时，若要f[i]j] 匹配，首先 equalChar(s[i-1],p[j-2])必须为true ,
   此时，只需要 f[i - 1][j] 为true  或者 f[i - 1][j - 1] 为true 则，f[i][j] 为true
~~~~~~~~~边界条件，i>1
   3特俗情况，i=0 或者 i =1 ，此时，只要f[i][j-1] 为true,f[i][j] 为true

*/

function equalChar(chars, charp) {
    return  charp === '.' || charp === chars 
}
var isMatch = function (s, p) {
    let f = []
    for (let i = 0; i <= s.length; ++i) {
        f.push([])
        for (let j = 0; j <= p.length; ++j) {
            f[i].push(false)
        }
    }
    f[0][0] = true
    for (let i = 0; i <= s.length; ++i) {
        for (let j = 1; j <= p.length; ++j) {

            if (p[j - 1] === '*') {
                // 当前p[j] 为*
                //console.log(i,j)
                if (i < 2) {
                    f[i][j] = f[i][j - 1] || f[i][j]
                } else {
                    if (equalChar(s[i - 1], p[j - 2])) f[i][j] = f[i - 1][j] || f[i - 1][j - 1]
                }

                if (j > 1) { f[i][j] = f[i][j - 2] || f[i][j] }
            } else {
                if (i > 0 && equalChar(s[i - 1], p[j - 1])) {
                    // 当前p[j] 不为*
                    if (i > 0 && equalChar(s[i - 1], p[j - 1])) {
                        f[i][j] = f[i - 1][j - 1]
                    }
                    if (j > 2 && p[j - 2] == '*') {
                        // console.log(i,j,f[i-1][j-3],f[i][j] ,f[i-1][j-3] || f[i][j] )
                        f[i][j] = f[i - 1][j - 3] || f[i][j]
                    }
                }
            }
        }
    }
    //console.log(f)
    return f[s.length][p.length]
};

// console.log(isMatch('aa', "a"))
// console.log(isMatch('aa', "a*"))
console.log(isMatch('', ".*"))
// console.log(isMatch('aab', "c*a*b"))
console.log(isMatch("aab", "a*a*c"))
//console.log(isMatch('mississippi', "mis*is*ip*."))
//false true true true false true