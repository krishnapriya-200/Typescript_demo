"use strict";
//Create a Student Class with a Constructor and Display Student Details
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Student Age: " + this.age);
    }
}
let student = new Student(101, "Krishna", 20);
student.display();
