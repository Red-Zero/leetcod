/*
 20. 表示数值的字符串
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
数值（按顺序）可以分成以下几个部分：
若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：
["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：
["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
示例 1：
输入：s = "0"
输出：true
示例 2：
输入：s = "e"
输出：false
示例 3：
输入：s = "."
输出：false
示例 4：
输入：s = "    .1  "
输出：true
提示：
1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
---------------------------------------------------------------------------------
题解:这题别那么暴力，不然会把自己恶心进去的。仔细读下题,我们稍微把问题分解一下，

数值（按顺序）可以分成以下几个部分：
若干空格 
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
1.首尾的空格是合法的，既然如此，我们用可以直接 s.trim()来处理空格
2.处理完空格后，剩下的串合法情况只有以下几种情况 
   整数 
   小数
   整数E整数
   小数E整数
   小数e整数
   整数e整数
3.我先假设有两个函数，isInteger(string)->判断字符串string是否为整数，isFloat(string) ->判断字符串string是否为小数
   接下来,我们先查询以下第一个e(E)是否存在的位置，
   如果e存在，我们则把s分成两个两个字符串
    pe:e以前的字符串
    se:e之后的字符串
    这个时候返回结果为 (isInterger(pe) || isFloat(pe)) && isInterger(se) 
   如果e不存在，则返回  isInterger(pe) || isFloat(pe)
4.接下来，我们来实现isInterger 和 isFloat
  isInterger(si):
     我们先看一下条件
        整数（按顺序）可以分成以下几个部分：
       （可选）一个符号字符（'+' 或 '-'）
        至少一位数字
     分析以下，就是首先，不能为空，首位可以是+,-，0-9这11个字符，其它位则只能是0-9
     这下就简单来，我们来开个数组，tmp =[0,1,2,3,4,5,6,7,8,9]
     对于字符串s,为空直接返回false
     如果 si[0] 不属于tmp，且 si[0] != '+' 且  si[0] != '-' 则返回 false
     对于si[1-n],只要不属于tmp,则返回 false
  isFloat(sf):
     我们看以下小数的条件
     至少一位数字，后面跟着一个点 '.'
     至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
    一个点 '.' ，后面跟着至少一位数字

    首先，我们可以判定，'.'必然存在，否则就直接返回flase
    然后我们找到'.'的位置, 然后将sf查分为两个字符串
     sfp:'.'以前的字符串
     sfs:'.'以后的字符串
     这个时候结果为 isInterger(sfp) && isInterger(sfs)
     注意几个边界条件 
       sfp可以为空，sfs可以为空，但他俩不能同时为空,如: . 是非法的
       sfs但首位不能带‘+’和‘-’，如 3.+3是非法的
       sfp可是只是 '+'或者'-',如 +.3是合法的
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) { 
     //处理空格
     s=s.trim()
     //查找E
     let e=-1
     for(var index in s){
         if(s[index] == 'e' || s[index] == 'E'){
             e =parseInt(index);
             break;
         }
     }
     //以e为中心点，拆分e
     let pres = e>0?s.slice(0,e):s
    // console.log(e,s,e+1,s.slice(2))
     if(e>-1){
         return (isInterger(pres) || isFloat(pres)) && isInterger(s.slice(e+1))
     }else{
        //console.log(s,pres,isInterger(pres),isFloat(pres))
        return isInterger(pres) || isFloat(pres)
     }
};
//判断字符串是否为整数
function isInterger(s){
    let temp= '0123456789'
    if(!s || !s.length || s == '+' || s == '-') return false
    if(s[0] != '+' && s[0] != '-' && temp.indexOf(s[0]) < 0) return false
    for(let i=1;i<s.length;++i){
        if(temp.indexOf(s[i]) < 0) return false
    }
    return true
}
function isFloat(s){
    let point = s.indexOf('.')
    if(point <0){return false}
    let pres = s.slice(0,point)
    let sons= s.slice(point+1)

    if(sons && (sons[0] == '-' || sons[0] == '+')) return false
    if(!pres || pres =='+' || pres == '-'){
        return isInterger(sons)
    }
    if(!sons){
        return isInterger(pres)
    } 
    return isInterger(pres) && isInterger(sons) 
}

//console.log(isFloat('1a3.14'))
  let data = [ "+.-8"]
  for(let item of data){
  console.log(isNumber(item),item)}