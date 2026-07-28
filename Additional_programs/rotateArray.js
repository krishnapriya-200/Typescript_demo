"use strict";
//Rotate an Array by N Positions
let arr = [1, 2, 3, 4, 5];
let n = 2;
let rotatedArray = arr.slice(n).concat(arr.slice(0, n));
console.log("Rotated Array:", rotatedArray);
