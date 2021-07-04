const { Book, Student, Teacher, Person } = require("./main");

let personPayload = {
  firstName: "Asif",
  lastName: "Sorowar",
  dateOfBirth: Date.now(),
};
let teacherPayload = {
  firstName: "Golam",
  lastName: "Sorowar",
  dateOfBirth: Date.now(),
  canTeach: "Physics",
  salary: 50000,
  taughtPeoples: [personPayload],
};
let bookPayload = {
  bName: "machine leaning",
  ISBN: "something",
  topics: ["svm", "supervised leaning"],
};
let studentPayload = {
  firstName: "Asif",
  lastName: "Sorowar",
  dateOfBirth: Date.now(),
  studiedBooks: [],
  taughtBy: [teacherPayload],
};

let student;
let teacher;

describe("Person", () => {
  person = new Person(personPayload);
  it("should return a valid Person object", () => {
    expect(person).toMatchObject(personPayload);
  });

  it("should return valid full name", () => {
    person = new Person(personPayload);

    expect(person.name()).toMatch("Asif Sorowar");
  });
});

describe("Teacher", () => {
  teacher = new Teacher(teacherPayload);

  it("should return a valid Teacher object", () => {
    expect(teacher).toMatchObject(teacherPayload);
  });

  it("should have access Person object", () => {
    expect(teacher).toHaveProperty("name");
  });

  it("should have access Person call", () => {
    expect(teacher.teach(personPayload)).toBe("yes");
  });

  it("should have return full Teacher object", () => {
    expect(teacher.deepClone()).toHaveProperty("name");
  });
});

describe("Book", () => {
  beforeEach(async () => {});
  it("should return a valid Book object", () => {
    const book = new Book(bookPayload);
    expect(book).toMatchObject(bookPayload);
  });
});

describe("Book", () => {
  student = new Student(studentPayload);
  it("should return a valid Student object", () => {
    expect(student).toMatchObject(studentPayload);
  });

  it("should have access Person object", () => {
    expect(student).toHaveProperty("name");
  });

  it("should have called study method", () => {
    expect(student.study(bookPayload, teacherPayload)).toBeUndefined();
  });

  it("should have called hasStudied method and return true", () => {
    expect(student.hasStudied("svm")).toBeTruthy();
  });
  it("should have called hasStudied method and return false", () => {
    expect(student.hasStudied("physics")).toBeFalsy();
  });
});
