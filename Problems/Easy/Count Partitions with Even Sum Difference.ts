/**
*
You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

Left subarray contains indices [0, i].
Right subarray contains indices [i + 1, n - 1].
Return the number of partitions where the difference between the sum of the left and right subarrays is even.

 

Example 1:

Input: nums = [10,10,3,7,6]

Output: 4

Explanation:

The 4 partitions are:

[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
Example 2:

Input: nums = [1,2,2]

Output: 0

Explanation:

No partition results in an even sum difference.

Example 3:

Input: nums = [2,4,6,8]

Output: 3

Explanation:

All partitions result in an even sum difference.

 

Constraints:

2 <= n == nums.length <= 100
1 <= nums[i] <= 100
**/
function countPartitions(nums: number[]): number {
    var evenPartitions = 0
    for (var j = 0; j < nums.length - 1; j++) {
        var arrCount1 = nums.slice(0, j + 1).reduce((acc, val) => acc + val, 0);
        var arrCount2 = nums.slice(j + 1, nums.length).reduce((acc, val) => acc + val, 0);
        if (((arrCount1 - arrCount2) % 2 == 0) && arrCount1 > 0 && arrCount2 > 0) evenPartitions++;
    }
    return evenPartitions;
};
