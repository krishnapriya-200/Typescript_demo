//Demonstrate public, private, and protected Access Modifiers Using an Employee Class

class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display(): void {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}
let emp = new Employee("Priya", 50000, "AI & DS");
console.log("Employee Name: " + emp.name);
emp.display();