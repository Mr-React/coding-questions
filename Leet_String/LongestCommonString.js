/**
 * Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.

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
strs[i] consists of only lowercase English letters.
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
    }
  }
  return ans;
};

const str = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(str));
