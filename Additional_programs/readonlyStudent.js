"use strict";
// Create a Student Class with a readonly Student ID
class students {
    studentId;
    name;
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
    display() {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.name);
    }
}
let student = new students(101, "priya");
student.display();
