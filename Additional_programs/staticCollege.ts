//Create a Class with a static College Name and a static Method

class Student {
    static collegeName: string = "SVECW";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log("Student Name: " + this.name);
    }
    static showCollege(): void {
        console.log("College Name: " + Student.collegeName);
    }
}
let student = new Student("priya");
student.display();
Student.showCollege();