//Create a Student Class with a Constructor and Display Student Details

class Student {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Student Age: " + this.age);
    }
}
let student = new Student(101, "Krishna", 20);
student.display();