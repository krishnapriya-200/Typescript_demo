"use strict";
//Check Perfect Number
let nums = 28;
let sums = 0;
for (let i = 1; i < nums; i++) {
    if (nums % i == 0) {
        sums = sums + i;
    }
}
if (sums == nums) {
    console.log(nums + " is a Perfect Number");
}
else {
    console.log(nums + " is Not a Perfect Number");
}
