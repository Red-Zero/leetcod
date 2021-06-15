/*
题目描述:
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。
限制：
0 <= n <= 1000 0 <= m <= 1000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
-------------------------------------------------------------------------------------------
题解：
对于任意元素matrix[i][j]，
凡是matrix[i][j]左边的数都比它小，即 matrix[i][k] < matrix[i][j] (k<j),
凡是matrix[i][j]下边的数都比它大，即 matrix[k][j] > martrix[i][j] (k>i),
则以右上角为起点，数组就成了一颗二分查找树
即初始为martix[i][j](i=0,j=m),当target  > martix[i][j] 时，则i++，当target  < martix[i][j] 则j-- 直到 i>n-1 或者 j<0
PS:注意判断特殊情况[] 和 [[]]
*/
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) return false
    let i = 0, j = matrix[0].length - 1;
    while (j >= 0 && i < matrix.length) {
        if (matrix[i][j] == target) return true
        if (matrix[i][j] < target) { i++ } else { j-- }
    }
    return false
}