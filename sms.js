import inquirer from "inquirer";
class Student {
    constructor(Name, Course, ID) {
        this.name = Name;
        this.course = Course;
        this.id = ID;
    }
    display() {
        console.log(`${this.name} is enrolled in course ${this.course} with id  ${this.id}`);
    }
}
class sms {
    constructor() {
        this.students = [];
        this.enrollment = [];
        this.nextId = 24001;
    }
    async addStudents() {
        await inquirer.prompt([
            { type: "input",
                name: "fullname",
                message: "enter your name" },
            { type: "list",
                name: "courses",
                choices: ["ai", "meta", "blkchain"],
                message: "choose course" }
        ]).then(input => {
            let newId = this.nextId++;
            let newStudent = new Student(input.fullname, input.courses, newId);
            this.students.push(newStudent);
        });
    }
    displayStudents() {
        this.students.forEach(students => { students.display(); });
    }
}
let piaic = new sms();
async function start() {
    while (true) {
        await piaic.addStudents();
        piaic.displayStudents();
    }
}
start();
