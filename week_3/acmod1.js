"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayEmployee() {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
const emp = new Employee("Abhi", 60000, "IT");
emp.displayEmployee();
console.log(emp.name);
