/***
**
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
**/
function searchInsert(nums: number[], target: number): number {
    var a: number = 0;
    var b: number = nums.length;
    var c: number = 0;
    if (target > nums[nums.length - 1]) return nums.length;
    while (a <= b) {
        c = Math.trunc((a+b)/2);
        if (nums[c] == target) return c;
        if (target < nums[c]) b = c - 1;
        else a = c + 1;
    }
    return a;
};
