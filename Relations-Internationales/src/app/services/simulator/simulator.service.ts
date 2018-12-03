import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { Contact } from '../../models/contact';
import { Administrator } from '../../models/administrator';
import { DailyTopic } from '../../models/daily-topic';
import { Course } from '../../models/course';
import { Mark } from '../../models/mark';
import { Poll } from '../../models/poll';
import { PossibleAnswer } from '../../models/possible-answer';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  private objectsSimulated: any[];
  private students: Student[];
  private contacts: Contact[];
  private administrators: Administrator[];
  private dailyTopics: DailyTopic[];
  private courses: Course[];
  private marks: Mark[];
  private polls: Poll[];
  private possibleAnswers: PossibleAnswer[];

  constructor(private datePipe: DatePipe) {
    this.executeSimulation();
  }

  private executeSimulation(): void {
    // const student1: Student = new Student('person001', 'person001@gmail.com', 'Jean', 'Dupont',
    //   new Date(), new Date(), '0610000001',
    //   'UGA', false, false, [], [], []);
    // const student2: Student = new Student('person002', 'person002@gmail.com', 'Alice', 'Clerc',
    //   new Date(), new Date(), '0610000002',
    //   'Paris-6', true, true, [], [], []);
    // const student3: Student = new Student('person003', 'person003@gmail.com', 'Benoit', 'Dumas',
    //   new Date(), new Date(), '0610000003',
    //   'Jean-Moulin', false, true, [], [], []);
    // const student4: Student = new Student('person004', 'person004@gmail.com', 'Marie', 'Lambert',
    //   new Date(), new Date(), '0610000004',
    //   'UPMF', true, false, [], [], []);
    // const student5: Student = new Student('person005', 'person005@gmail.com', 'Alexandra', 'Duris',
    //   new Date(), new Date(), '0610000005',
    //   'UGA', false, false, [], [], []);
    // const student6: Student = new Student('person006', 'person006@gmail.com', 'Quentin', 'Moro',
    //   new Date(), new Date(), '0610000006',
    //   'Ensimag', true, false, [], [], []);
    // const student7: Student = new Student('person007', 'person007@gmail.com', 'Claude', 'Ruyf',
    //   new Date(), new Date(), '0610000007',
    //   'UJF', false, false, [], [], []);
    // const student8: Student = new Student('person008', 'person008@gmail.com', 'Virginie', 'Lemaire',
    //   new Date(), new Date(), '0610000008',
    //   'UPMF', true, false, [], [], []);
    // const student9: Student = new Student('person009', 'person009@gmail.com', 'Chloe', 'Lewom',
    //   new Date(), new Date(), '0610000009',
    //   'UGA', false, false, [], [], []);
    // const student10: Student = new Student('person010', 'person010@gmail.com', 'Martin', 'Man',
    //   new Date(), new Date(), '0610000010',
    //   'UGA', true, true, [], [], []);
    // const student11: Student = new Student('person011', 'person011@gmail.com', 'Xavier', 'Norti',
    //   new Date(), new Date(), '0610000011',
    //   'Jean-Moulin', false, true, [], [], []);
    // const student12: Student = new Student('person012', 'person012@gmail.com', 'Marie', 'Latour',
    //   new Date(), new Date(), '0610000012',
    //   'UPMF', true, false, [], [], []);

    // const contact1: Contact = new Contact('cont001', student1, 'cont001@gmail.com', 'Lucie', 'Prevert',
    //   '0620000001', 'affiliation1', 'descriptionContact001');
    // const contact2: Contact = new Contact('cont002', student1, 'cont002@gmail.com', 'Alain', 'Dante',
    //   '0620000002', 'affiliation2', 'descriptionContact002');
    // const contact3: Contact = new Contact('cont003', student1, 'cont003@gmail.com', 'Pierre', 'Drut',
    //   '0620000001', 'affiliation3', 'descriptionContact003');
    // const contact4: Contact = new Contact('cont004', student2, 'cont004@gmail.com', 'Melanie', 'Tullin',
    //   '0620000004', 'affiliation4', 'descriptionContact004');
    // const contact5: Contact = new Contact('cont005', student3, 'cont005@gmail.com', 'Claire', 'Vallier',
    //   '0620000005', 'affiliation5', 'descriptionContact005');
    // const contact6: Contact = new Contact('cont006', student3, 'cont006@gmail.com', 'Thomas', 'Huto',
    //   '0620000006', 'affiliation6', 'descriptionContact006');

    // const administrator1: Administrator = new Administrator('person005', 'person005@gmail.com', 'Maeva', 'Grunier',
    //   new Date(), new Date(), '0610000004', 'admin001');

    // const dailyTopic1: DailyTopic = new DailyTopic('dtopic001', new Date(), 'descriptionDT001',
    //   'I am well arrived !', student1);
    // const dailyTopic2: DailyTopic = new DailyTopic('dtopic002', new Date(), 'descriptionDT002',
    //   'Happy to integrate the football team.', student2);
    // const dailyTopic3: DailyTopic = new DailyTopic('dtopic003', new Date(), 'descriptionDT003',
    //   'Canada is a nice country', student4);
    // const dailyTopic4: DailyTopic = new DailyTopic('dtopic004', new Date(), 'descriptionDT004',
    //   'Looking for a new smartphone ?', student4);

    // const course1: Course = new Course('course001', 'English', 'descriptionCourse001', 3,
    //   [{ fullName: 'Jean Bertin', emailAddress: 'jean.bertin@gmail.com' }], student1, [], []);
    // const course2: Course = new Course('course002', 'Mathematics', 'descriptionCourse002', 6,
    //   [{ fullName: 'Veronique Durand', emailAddress: 'veronique.durand@gmail.com' }], student2, [], []);
    // const course3: Course = new Course('course003', 'Biology', 'descriptionCourse003', 6,
    //   [{ fullName: 'Alain Boubou', emailAddress: 'alain.boubou@gmail.com' }], student2, [], []);
    // const course4: Course = new Course('course004', 'Algorithms', 'descriptionCourse004', 2,
    //   [{ fullName: 'Martin Dupuy', emailAddress: 'alain.dupuy@gmail.com' }], student3, [], []);

    // const mark1: Mark = new Mark('mark001', course1, 'QCM', 8.5);
    // const mark2: Mark = new Mark('mark002', course1, 'CC', 15);
    // const mark3: Mark = new Mark('mark003', course1, 'CC', 10);
    // const mark4: Mark = new Mark('mark004', course2, 'DM', 6.5);
    // const mark5: Mark = new Mark('mark005', course2, 'Examen', 19);
    // const mark6: Mark = new Mark('mark006', course2, 'Partiel', 11);
    // const mark7: Mark = new Mark('mark007', course3, 'Partiel', 15);
    // const mark8: Mark = new Mark('mark008', course3, 'CC', 3);
    // const mark9: Mark = new Mark('mark009', course3, 'QCM', 12.5);

    // const poll1: Poll = new Poll('poll001', course1, 'Sent', 'Which color do you prefer ?', null,
    //   null, []);
    // const poll2: Poll = new Poll('poll002', course2, 'Answered', 'Are you intagrated ?', 'Pretty well',
    //   new Date('07/11/2017'), []);
    // const poll3: Poll = new Poll('poll003', course3, 'Sent', 'Do you need help for this chapter ?', null,
    //   null, []);
    // const poll4: Poll = new Poll('poll004', course3, 'Answered', 'Have you forget your headset ?', 'No',
    //   new Date('28/05/2018'), []);

    // const possibleAnswer1: PossibleAnswer = new PossibleAnswer('posAn001', poll1, 'Blue');
    // const possibleAnswer2: PossibleAnswer = new PossibleAnswer('posAn002', poll1, 'Red');
    // const possibleAnswer3: PossibleAnswer = new PossibleAnswer('posAn003', poll1, 'Yellow');
    // const possibleAnswer4: PossibleAnswer = new PossibleAnswer('posAn004', poll1, 'Green');
    // const possibleAnswer5: PossibleAnswer = new PossibleAnswer('posAn005', poll2, 'Very well');
    // const possibleAnswer6: PossibleAnswer = new PossibleAnswer('posAn006', poll2, 'Pretty well');
    // const possibleAnswer7: PossibleAnswer = new PossibleAnswer('posAn007', poll2, 'Not at all');
    // const possibleAnswer8: PossibleAnswer = new PossibleAnswer('posAn008', poll3, 'Yes');
    // const possibleAnswer9: PossibleAnswer = new PossibleAnswer('posAn009', poll3, 'No');
    // const possibleAnswer10: PossibleAnswer = new PossibleAnswer('posAn010', poll4, 'Yes');
    // const possibleAnswer11: PossibleAnswer = new PossibleAnswer('posAn011', poll4, 'No');
    //
    // this.students = [student1, student2, student3, student4, student5, student6, student7, student8,
    //   student9, student10, student11, student12];
    // this.contacts = [contact1, contact2, contact3, contact4, contact5, contact6];
    // this.administrators = [administrator1];
    // this.dailyTopics = [dailyTopic1, dailyTopic2, dailyTopic3, dailyTopic4];
    // this.courses = [course1, course2, course3, course4];
    // this.marks = [mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9];
    // this.polls = [poll1, poll2, poll3, poll4];
    // this.possibleAnswers = [possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4, possibleAnswer5,
    //   possibleAnswer6, possibleAnswer7, possibleAnswer8, possibleAnswer9, possibleAnswer10, possibleAnswer11];
    // this.objectsSimulated = [this.students, this.contacts, this.administrators, this.dailyTopics,
    // this.courses, this.marks, this.polls, this.possibleAnswers
    // ];
  }

  public getObjectsSimulated(): any[] { return this.objectsSimulated; }
  public getStudents(): Student[] { return this.students; }
  public getContacts(): Contact[] { return this.contacts; }
  public getAdministrators(): Administrator[] { return this.administrators; }
  public getDailyTopics(): DailyTopic[] { return this.dailyTopics; }
  public getCourses(): Course[] { return this.courses; }
  public getMarks(): Mark[] { return this.marks; }
  public getPolls(): Poll[] { return this.polls; }
  public getPossibleAnswers(): PossibleAnswer[] { return this.possibleAnswers; }
}
