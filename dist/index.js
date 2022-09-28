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
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
class Teacher extends Person {
    get fullName() {
        return "Prof. " + super.fullName;
    }
}
printNames([
    new Student(1, "John", "Smith"),
    new Principal("Nderitu", "Gachagua"),
    new Teacher("Tabut", "Choge"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map