"use strict";
//Create a Class with a static College Name and a static Method
class Student {
    static collegeName = "SVECW";
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name: " + this.name);
    }
    static showCollege() {
        console.log("College Name: " + Student.collegeName);
    }
}
let student = new Student("priya");
student.display();
Student.showCollege();
