"use strict";
let employeeName = "Abhi";
let basicSalary = 50000;
let bonus = 5000;
function calculateSalary(salary, bonusAmount) {
    return salary + bonusAmount;
}
let totalSalary = calculateSalary(basicSalary, bonus);
console.log("Employee:", employeeName);
console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Total Salary:", totalSalary);
