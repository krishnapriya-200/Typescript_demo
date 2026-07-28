//GCD and LCM of Two Numbers

let a: number = 12;
let b: number = 18;

let gcd: number = 1;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
}
let lcm: number = (a * b) / gcd;

console.log("GCD = " + gcd);
console.log("LCM = " + lcm);