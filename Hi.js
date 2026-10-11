class Student {
    constructor(name, age, course, marks) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("Marks:", this.marks);
    }

    checkResult() {
        if (this.marks >= 40) {
            return "Pass";
        } else {
            return "Fail";
        }
    }

    updateMarks(newMarks) {
        this.marks = newMarks;
    }
}

const student1 = new Student("Abhishek", 20, "CSE", 85);
const student2 = new Student("Rahul", 21, "IT", 35);

student1.displayDetails();
console.log("Result:", student1.checkResult());

console.log("Second Student:");
student2.displayDetails();
console.log("Result:", student2.checkResult());

student2.updateMarks(65);
console.log("Updated Marks:", student2.marks);
console.log("Updated Result:", student2.checkResult());

const student3 = new Student("Priya", 19, "AIML", 92);
student3.displayDetails();
console.log("Result:", student3.checkResult());

console.log(student1 instanceof Student);
console.log(student2 instanceof Student);

const students = [student1, student2, student3];

students.forEach((student) => {
    console.log(student.name, student.marks);
});

const topper = students.reduce((best, current) => {
    return current.marks > best.marks ? current : best;
});

console.log("Topper:", topper.name);
console.log("Topper Marks:", topper.marks);

const passedStudents = students.filter((student) => {
    return student.marks >= 40;
});

console.log("Passed Students:");
passedStudents.forEach((student) => {
    console.log(student.name);
});

const studentObject = {
    name: "Amit",
    age: 20,
    course: "CSE",
    greet() {
        console.log("Hello, I am " + this.name);
    }
};

studentObject.greet();
console.log(studentObject.course);
studentObject.marks = 78;
console.log(studentObject.marks);
studentObject.marks = 88;
console.log(studentObject.marks);
studentObject.marks = 98;
console.log(studentObject.marks);
studentObject.marks = 100;
console.log(studentObject.marks);
studentObject.marks = 90;
console.log(studentObject.marks);