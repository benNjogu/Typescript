class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  //with protected keyword, walk can be inherited.
  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("Taking a test");
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Prof. " + super.fullName;
  }
}

printNames([
  new Student(1, "John", "Smith"),
  new Principal("Nderitu", "Gachagua"),
  new Teacher("Tabut", "Choge"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

