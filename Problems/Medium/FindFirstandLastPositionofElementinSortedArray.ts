/***
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
***/
function searchRange(nums: number[], target: number): number[] {
    if (nums.length == 0) return [-1, -1];
    if (nums.length == 1 && nums[0] == target) return [0, 0];
    var a = 0;
    for (let a of [...new Set(nums)]) {
        var firstIndex = nums.indexOf(target);
        var lastIndex = nums.lastIndexOf(target);
        if (firstIndex >= 0 && lastIndex >= 0) {
            return [firstIndex, lastIndex];
        }
    }
    return [-1, -1];
};
