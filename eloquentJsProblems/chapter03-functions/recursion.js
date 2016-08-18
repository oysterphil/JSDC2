/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether 
a number is even or odd by using % 2 to check whether it’s divisible by 
two. Here’s another way to define whether a positive whole number is even 
or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a 
way to fix this?

This exercise can be found at http://eloquentjavascript.net/03_functions.html 
and the following code was written for learning purposes by Phil Olive.
*/

// This is my first crack at having the function work on 50 and 75 without 
// taking into consideration -1.

function isEven(a) {
  if (a == 1) {
    return false;
  } else if (a == 0) {
    return true;
  } else {
    return isEven(a - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false

/*
  console.log(isEven(-1));
  → "RangeError: Maximum call stack size exceeded"
  This is because if a is -1, then it will never be equal to 1 or 0.
  I have fixed this below:
*/

function isEven(a) {
  if (a == 1) {
    return false;
  } else if (a == 0) {
    return true;
  } else if (a < 0) {
    return isEven(-a);
  } else {
    return isEven(a - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false










