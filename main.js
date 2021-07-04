function Person({ firstName, lastName, dateOfBirth }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;

  this.name = function () {
    return firstName + " " + lastName;
  };
}

function Teacher({
  firstName,
  lastName,
  dateOfBirth,
  canTeach,
  salary,
  taughtPeoples = [],
}) {
  Person.call(this, { firstName, lastName, dateOfBirth });

  this.canTeach = canTeach;
  this.salary = salary;
  this.taughtPeoples = taughtPeoples;

  this.teach = (person) => {
    let teach = "no";

    this.taughtPeoples.forEach((people) => {
      if (people === person) teach = "yes";
      return;
    });
    return teach;
  };

  this.deepClone = () => this;
}

Teacher.prototype = Object.create(Person.prototype);

function Book({ bName, ISBN, topics = [] }) {
  this.bName = bName;
  this.ISBN = ISBN;
  this.topics = topics;
}

function Student({
  firstName,
  lastName,
  dateOfBirth,
  studiedBooks = [],
  taughtBy = [],
}) {
  Person.call(this, { firstName, lastName, dateOfBirth });

  this.studiedBooks = studiedBooks;
  this.taughtBy = taughtBy;

  this.study = (book, teacher) => {
    this.studiedBooks.push(book);
    this.taughtBy.push(teacher);
  };

  this.hasStudied = (topicName) => {
    for (let book of this.studiedBooks) {
      for (let topic of book.topics) {
        if (topic === topicName) {
          return true;
        }
      }
    }

    return false;
  };
}

Student.prototype = Object.create(Person.prototype);

module.exports.Person = Person;
module.exports.Teacher = Teacher;
module.exports.Book = Book;
module.exports.Student = Student;
