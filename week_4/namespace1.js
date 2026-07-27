"use strict";
var StudentInfo;
(function (StudentInfo) {
    class Student {
        name;
        roll;
        constructor(name, roll) {
            this.name = name;
            this.roll = roll;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Roll:", this.roll);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
const s = new StudentInfo.Student("Abhi", 4565);
s.display();
