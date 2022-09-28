"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Prof. " + super.fullName;
    }
}
let teacher = new Teacher("Tabut", "Choge");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map