/**
 * Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

const isValid = function (str) {
  let stack = [];
  for (let c of str) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

console.log("()[]{}");
console.log(isValid("()[]{}"));
console.log("-------------------------------------");
console.log("(((}))");
console.log(isValid("(((}))"));

const isValidOptimize = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(")");
    } else if (str[i] === "{") {
      stack.push("}");
    } else if (str[i] === "[") {
      stack.push("]");
    } else if (stack.pop() !== str[i]) {
      return false;
    }
  }
  return !stack.length;
};

console.log("\n", "");

console.log("()[]{}");
console.log(isValidOptimize("()[]{}"));
console.log("-------------------------------------");
console.log("(((}))");
console.log(isValidOptimize("(((}))"));
