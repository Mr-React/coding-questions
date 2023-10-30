/**
 * Excel Sheet Column Title
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
 */

var convertToTitle = function (columnNumber) {
  let res = "";

  while (columnNumber > 0) {
    columnNumber--;
    res = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(1);
console.log(convertToTitle(1));
console.log(28);
console.log(convertToTitle(28));
console.log(701);
console.log(convertToTitle(701));
