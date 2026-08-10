"use strict";
//GCD and LCM of Two Numbers
let a = 12;
let b = 18;
let gcd = 1;
for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
}
let lcm = (a * b) / gcd;
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);
