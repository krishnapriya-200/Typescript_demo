"use strict";
//Find the Missing Number in an Array
let arr = [1, 2, 3, 5];
let n = 5;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
let total = (n * (n + 1)) / 2;
let missing = total - sum;
console.log("Missing Number = " + missing);
