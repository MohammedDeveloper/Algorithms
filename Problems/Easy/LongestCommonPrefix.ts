/***
**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
**/
function longestCommonPrefix(strs: string[]): string {
    let shortestWord = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestWord.length) {
            shortestWord = strs[i];
        }
    }
    for (var i = shortestWord.length; i >= 0;) {
        if (strs.every(str => str.startsWith(shortestWord))) return shortestWord;
        i--;
        shortestWord = shortestWord.split('').slice(0, i).join('');
    }
    return "";
};
