## BD projet imag soft


DROP TABLE localDataBase.PossibleAnswer;
DROP TABLE localDataBase.Poll;
DROP TABLE localDataBase.Teacher;
DROP TABLE localDataBase.Mark;
DROP TABLE localDataBase.Course;
DROP TABLE localDataBase.DailyTopic;
DROP TABLE localDataBase.Administrator;
DROP TABLE localDataBase.Contact;
DROP TABLE localDataBase.Student;
DROP TABLE localDataBase.Person;



CREATE TABLE localDataBase.Person(
  idPerson varchar(255) NOT NULL,
  emailAdress varchar(255),
  firstName varchar(255),
  lastName varchar(255),
  birthDate date,
  lastConnection timestamp,
  phoneNumber varchar(255),
  PRIMARY KEY (idPerson)
);

CREATE TABLE localDataBase.Student(
  idStudent varchar(255) NOT NULL,
  university varchar(255),
  isArchieved boolean,
  isEntrant boolean,
  PRIMARY KEY (idStudent),
  FOREIGN KEY (idStudent) REFERENCES localDataBase.Person(idPerson)
);

CREATE TABLE localDataBase.Contact(
  idContact varchar(255) NOT NULL,
  idStudent varchar(255),
  emailAdress varchar(255),
  firstName varchar(255),
  lastName varchar(255),
  phoneNumber varchar(255),
  affiliation varchar(255),
  description varchar(255),
  PRIMARY KEY (idContact),
  FOREIGN KEY (idStudent) REFERENCES localDataBase.Student(idStudent)
);

CREATE TABLE localDataBase.Administrator(
  idAdministrator varchar(255) NOT NULL,
  PRIMARY KEY (idAdministrator),
  FOREIGN KEY (idAdministrator) REFERENCES localDataBase.Person(idPerson)
);

CREATE TABLE localDataBase.DailyTopic(
  idDailyTopic varchar(255) NOT NULL,
  dateDailyTopic date,
  description varchar(255),
  name varchar(255),
  PRIMARY KEY (idDailyTopic)
);

CREATE TABLE localDataBase.Course(
  idCourse varchar(255) NOT NULL,
  description varchar(255),
  name varchar(255),
  ects int,
  PRIMARY KEY (idCourse)
);

CREATE TABLE localDataBase.Mark(
  idMark varchar(255) NOT NULL,
  idCourse varchar(255) NOT NULL,
  typeMark varchar(255),
  valueMark float,
  PRIMARY KEY (idMark),
  FOREIGN KEY (idCourse) REFERENCES localDataBase.Course(idCourse)
);

CREATE TABLE localDataBase.Teacher(
  idTeacher varchar(255) NOT NULL,
  idCourse varchar(255) NOT NULL,
  lastName varchar(255),
  firstName varchar(255),
  PRIMARY KEY (idTeacher),
  FOREIGN KEY (idCourse) REFERENCES localDataBase.Course(idCourse)
);

CREATE TABLE localDataBase.Poll(
  idPoll varchar(255) NOT NULL,
  idCourse varchar(255) NOT NULL,
  statusPoll varchar(255),
  question varchar(255),
  answer varchar(255),
  dateAnswer date,
  PRIMARY KEY (idPoll),
  FOREIGN KEY (idCourse) REFERENCES localDataBase.Course(idCourse)
);

CREATE TABLE localDataBase.PossibleAnswer(
  idPossibleAnswer varchar(255) NOT NULL,
  idPoll varchar(255) NOT NULL,
  valuePossibleAnswer varchar(255),
  PRIMARY KEY (idPossibleAnswer),
  FOREIGN KEY (idPoll) REFERENCES localDataBase.Poll(idPoll)
);




