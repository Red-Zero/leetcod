/*
剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
示例：
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
提示：
0 <= nums.length <= 50000
1 <= nums[i] <= 10000
通过次数147,987提交次数230,684
请问您在哪类招聘中遇到此题？
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
题解:这...一次性快排，l=0，从左往右,r=nums.length 从右往左，当num[j]为偶数 且 num[r]为奇数时，swap(l,r)就好
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let l = 0;r=nums.length-1
    while(l<r){
        let rl = nums[l] % 2
        let rr = nums[r] % 2
        if(rl === 1) l++
        if(rr === 0) r--
        if(rl === 0 && rr === 1) {
            let a = nums[l]
            nums[l] = nums[r]
            nums[r] =a 
        } 
    }
    return nums
};