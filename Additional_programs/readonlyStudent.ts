// Create a Student Class with a readonly Student ID

class students {
    readonly studentId: number;
    name: string;
    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
    display(): void {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.name);
    }
}
let student = new students(101, "priya");
student.display();