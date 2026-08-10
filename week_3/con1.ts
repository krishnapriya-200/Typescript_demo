class Student {
    name: string;
    rollNo: number;
    course: string;

    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("Course:", this.course);
    }
}

const student1 = new Student("Krishna priya", 4565, "AI & DS");
student1.displayDetails();