// Variable Type Annotations
let studentName: string = "Priya";
let rollNumber: number = 4565;
let isPresent: boolean = true;

// Function Type Annotations
function displayStudent(name: string, roll: number, present: boolean): void {
    console.log("Student Name:", name);
    console.log("Roll Number:", roll);
    console.log("Present:", present);
}

displayStudent(studentName, rollNumber, isPresent);