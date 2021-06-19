/*
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
说明：
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
示例 1：
输入：haystack = "hello", needle = "ll"
输出：2
示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：
输入：haystack = "", needle = ""
输出：0
提示：
0 <= haystack.length, needle.length <= 5 * 104
haystack 和 needle 仅由小写英文字符组成
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
--------------------------------------------------------------
题解: 经典kmp，网上的教程一个比一个复杂，看得我头大，说下自己的理解
s1，s2,求s2在s1中的位置
还是先从暴力匹配说起，我换种写法

while(i<s1.legth-s2.length;++i){
    for(j=0;j<s2.length;++j)
    {
        if(s[i+j] != s[j]) break;
        if(j == s2.length -1 )return i
    }
    i++;
}

暴力解法本质上是s1 的第0位开始，逐位匹配，如果失败则i+1，i每次只向后移动一位
那么，我们能不能想办法让i多移动几位呢，答案是可以
在s1[i+j] != s[j]（j>0,因为j==0的话没有意义）时，
我们可以知道, s1[i->i+j-1] 和s2[j->j-1]是匹配的

如果存在一个值k( j<=k<=j-1),使得 s2[0->k] == s2[j-k->j]（即s2的首尾是相同的）

由于 s1[i->i+j-1] =s2[j->j-1]是匹配的 ,s2[0->k] == s2[j-k->j] ，我们可以很容易想到
s1[j->j-k] == s2[0->k-1]
也就是从s1从第i位开始，连续k位和s2是匹配的
那么这个时候，我们就可以直接把i 跳到j-k的位置，把j跳到k的位置，然后再开始匹配
举个例子
    0 1 2 3 4 5 6 7 8 9 10 11
s1: a a b a a c a a b d a  a
s2: a a b a a d a a 
 
我们顺序开始匹配，在i=0,j=5的时候匹配失败，
此时对于 s[0->4],我们可以清晰的看到k=2
带入 s1[j-k->j-1] == s2[0->k-1]，即s1[3->4] ==s2[0->1](即aa)
这个时候i=j-k=5=3,j=k=2
s1: a a b a a c a a b d a  a
s2:       a a b a a d a a
这个我们就跳过了i=1和i=2的匹配流程，顺便把j也向后移了，减少了匹配次数
跳过的位数就是就是s2串尾部有多少个连续字符是和s2头部相同的，即s2[0->k] == s2[k->j]

接下来我们求一下k的值，设一个数组next[]，next[p](0<=p<s2.length)表示s2[p]的k值，初始值全是0
我们给两个变量l=0，r=1
如果s2[l] == s2[r]，则 next[r] =l+1;l++,r++,这个很好理解
如果s2[l] ！= s2[r]，我们知道这个时候肯定要回退l
首先，我们可以暴力回退,请参考我的getNext_force方法，
但我们仔细想想，我们会发现
s2[l] != s2[r],那么s[0->l-1] 和s[r-l -> r-1]一定是相等的，
以下面例子:
      0 1 2 3 4 5 6 7 8 9 10
s2:   a b a c d a b a a b c
next [0,0,1,0,0,1,2,3,0,0,0]
r=8,l=3, s[8] !=s[3]
但s[0->2] == s[5->7]
这种情况实际上是在求next[3]
那这个时候l回退的位置就应该是next[2],即next[l-1]

PS：网上代码有把next[0]设置-1，这样更好，和我的代码逻辑上是一样的，只是设置成-1会方便计算
 */
//adcadde
//[0,1] 0 1 -> 1 2
function getNext_force(s) {
    let next = []
    for (var i = 0; i < s.length; ++i) {
        next.push(0)
    }
    let l = 0, r = 1
    while (r < s.length) {
        if (s[l] == s[r]) {
            next[r] = ++l
            r++
        } else {
            l = 0
            let now = r
            while (s[l] == s[now]) {
                l++
                now--
            }
            next[r] = r - now
            r++

        }
    }
    return next
}

function getNext(s) {
    let next = []
    for (var i = 0; i < s.length; ++i) {
        next.push(0)
    }
    let l = 0, r = 1
    while (r < s.length) {
        if (s[l] == s[r]) {
            next[r] = ++l
            r++
        } else {
            if (l == 0) { r++ } else {
                l = next[l - 1]
            }

        }
        //console.log(l,r,next)
    }
    return next
}
var strStr = function (haystack, needle) {
    if (!needle) return 0
    let next = getNext(needle)

    let i = 0, j = 0
    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            //console.log(i, j, 333333)
            if (j == needle.length - 1) {
                return i - j
            }
            i++;
            j++
        } else {
            //console.log(i, j, 11111)
            if (j === 0) { i++ }
            else {
                j = next[j - 1]
            }
            //console.log(i, j, 222222)
        }
    }
    return -1
};
console.log(strStr("aaaaa", "bba"))
//console.log(strStr("mississippi","issip"))