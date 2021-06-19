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
题解:
 */
//adcadde
//[0,1] 0 1 -> 1 2
// function getNext(s) {
//     let next = []
//     for (var i = 0; i < s.length; ++i) {
//         next.push(0)
//     }
//     let l = 0, r = 1
//     while (r < s.length) {
//         if (s[l] == s[r]) {
//             next[r] = ++l
//             r++
//         } else {
//             l = 0
//             let now = r
//             while (s[l] == s[now]) {
//                 l++
//                 now--
//             }
//             next[r] = r - now
//             r++

//         }
//     }
//     return next
// }

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