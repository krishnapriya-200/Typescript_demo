"use strict";
//Demonstrate public, private, and protected Access Modifiers Using an Employee Class
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}
let emp = new Employee("Priya", 50000, "AI & DS");
console.log("Employee Name: " + emp.name);
emp.display();
