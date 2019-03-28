import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { Course } from 'src/app/models/course';
import { Contact } from 'src/app/models/contact';
import { DailyTopic } from 'src/app/models/daily-topic';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddCourseDialogComponent } from 'src/app/components/add-element-dialog/add-course-dialog/add-course-dialog.component';
import { AddContactDialogComponent } from 'src/app/components/add-element-dialog/add-contact-dialog/add-contact-dialog.component';
import { AddDailyTopicDialogComponent } from 'src/app/components/add-element-dialog/add-daily-topic-dialog/add-daily-topic-dialog.component';
import { SendEmailDialogComponent } from 'src/app/components/send-email-dialog/send-email-dialog.component';
import { MarkService } from 'src/app/services/back/mark.service';
import { Mark } from 'src/app/models/mark';
import * as jsPDF from 'jspdf';
import { Administrator } from 'src/app/models/administrator';
import { CourseService } from 'src/app/services/back/course.service';
import { DailyTopicsService } from 'src/app/services/back/daily-topics.service';
import { ContactService } from 'src/app/services/back/contact.service';
import { StudentService } from 'src/app/services/back/student.service';
import { AdministratorService } from 'src/app/services/back/administrator.service';
// import * as puppeteer from 'puppeteer';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private readonly markService: MarkService,
    private readonly router: Router,
    private readonly contactService: ContactService,
    private readonly courseService: CourseService,
    private readonly dailyTopicService: DailyTopicsService,
    private readonly studentService: StudentService,
    private readonly administratorService: AdministratorService) { }

  selectedStudent: Student;
  coursesOfSelectedStudent: Course[];
  contactsOfSelectedStudent: Contact[];
  dailyTopicsOfSelectedStudent: DailyTopic[];

  coursesOfSelectedStudentNotRejected: Course[];

  marks: { idCourse: string; marks: Mark[] }[] = [];
  selectedCourse: Course;
  fullNameUser: string;
  logs: { idPerson: string; type: string };

  ngOnInit() {
    this.coursesOfSelectedStudent = [];
    this.contactsOfSelectedStudent = [];
    this.dailyTopicsOfSelectedStudent = [];

    this.logs = { idPerson: localStorage.getItem('idPerson'), type: localStorage.getItem('type') };

    this.activatedRoute.data.subscribe(data => {
      this.selectedStudent = data.studentResolverResult[0];
      this.coursesOfSelectedStudent = data.coursesResolverResult['courses'];
      this.contactsOfSelectedStudent = data.contactsResolverResult['contacts'];
      this.dailyTopicsOfSelectedStudent = data.dailyTopicsResolverResult['dailyTopics'];

      this.coursesOfSelectedStudent.forEach(course => {
        this.markService.getMarksByStudent(course.getIdCourse(), this.selectedStudent.getIdPerson())
          .subscribe(result => {
            const marksByCourse = { idCourse: course.getIdCourse(), marks: [] };
            result['marks'].forEach(mark => marksByCourse.marks.push(mark));
            this.marks.push(marksByCourse);
          });
      });

      const userConnected = (localStorage.getItem('type') === 'administrator')
        ? new Administrator(data['loginResolverResult'][0])
        : new Student(data['loginResolverResult'][0]);

      this.fullNameUser = userConnected.getFirstName() + ' ' + userConnected.getLastName();

      this.coursesOfSelectedStudent.forEach(course => {
        if (course.getState() !== 'rejected') {
          this.coursesOfSelectedStudentNotRejected.push(course);
        }
      });
    });
  }

  displayAddElementDialog(dialogType: string): void {
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';
    matDialogConfig.data = this.selectedStudent;

    switch (dialogType) {
      case 'course':
        dialogRef = this.dialog.open(AddCourseDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          this.courseService.addCourse(result).subscribe(() => {

            this.courseService.getCoursesByStudent(this.selectedStudent.getIdPerson())
              .subscribe(coursesResult => {
                this.coursesOfSelectedStudent = [];

                coursesResult.courses.map(course => {
                  this.coursesOfSelectedStudent.push(course);
                  this.markService.getMarksByStudent(course.getIdCourse(), this.selectedStudent.getIdPerson())
                    .subscribe(marks => {
                      const marksByCourse = { idCourse: course.getIdCourse(), marks: [] };
                      marks['marks'].forEach(mark => marksByCourse.marks.push(mark));
                      this.marks.push(marksByCourse);
                    });
                });
              });

            this.marks.push({ idCourse: '', marks: [] });
          });
        });
        break;
      case 'dailyTopic':
        dialogRef = this.dialog.open(AddDailyTopicDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          this.dailyTopicService.addDailyTopic(result).subscribe(() => {

            this.dailyTopicService.getDailyTopicsByStudent(this.selectedStudent.getIdPerson())
              .subscribe(dailyTopicsResult => {
                this.dailyTopicsOfSelectedStudent = [];

                dailyTopicsResult.dailyTopics.map(dailyTopic => {
                  this.dailyTopicsOfSelectedStudent.push(dailyTopic);
                });
              });

          });
        });
        break;
      case 'contact':
        dialogRef = this.dialog.open(AddContactDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          this.contactService.addContact(result).subscribe(() => {

            this.contactService.getContactsByStudent(this.selectedStudent.getIdPerson())
              .subscribe(contactsResult => {
                this.contactsOfSelectedStudent = [];

                contactsResult.contacts.map(contact => {
                  this.contactsOfSelectedStudent.push(contact);
                });
              });

          });
        });
        break;
    }
  }

  displaySendEmailDialog(): void {
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';
    matDialogConfig.data = this.selectedStudent;

    dialogRef = this.dialog.open(SendEmailDialogComponent, matDialogConfig);
  }

  setSelectedCourse(selectedCourse: Course): void {
    this.selectedCourse = selectedCourse;
  }

  setIsLearningAgreementValid(): void {
    this.selectedStudent.setIsLearningAgreementValid(
      this.selectedStudent.getIsLearningAgreementValid() === 'false' ? 'true' : 'false'
    );
    this.selectedStudent.setDateLearningAgreementValid(new Date());
    this.studentService.updateLAStudent(this.selectedStudent).subscribe();
  }

  getNbEcts(): string {
    let nbEcts = '0';

    this.coursesOfSelectedStudent.forEach(courseOfSelectedStudent => {
      nbEcts = nbEcts + courseOfSelectedStudent.getEcts();
    });

    return nbEcts;
  }

  goToStudentList(): void {
    this.router.navigate(['home']);
  }

  async generatePDF() {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();

    // await page.goto(this.router.url);
    // await page.screenshot({ path: `${this.selectedStudent.getIdPerson()}_${new Date().toDateString()}` });
    // await browser.close();
  }

  deleteCourse(idCourse: string) {
    this.courseService.deleteCourse(idCourse).subscribe(() => {

      this.courseService.getCoursesByStudent(this.selectedStudent.getIdPerson())
        .subscribe(coursesResult => {
          this.coursesOfSelectedStudent = [];

          coursesResult.courses.map(course => {
            this.coursesOfSelectedStudent.push(course);
            this.markService.getMarksByStudent(course.getIdCourse(), this.selectedStudent.getIdPerson())
              .subscribe(marks => {
                this.marks = [];
                const marksByCourse = { idCourse: course.getIdCourse(), marks: [] };
                marks['marks'].forEach(mark => marksByCourse.marks.push(mark));
                this.marks.push(marksByCourse);
              });
          });
        });

      this.marks.push({ idCourse: '', marks: [] });

    });
  }

  deleteDailyTopic(idDailyTopic: string) {
    this.dailyTopicService.deleteDailyTopic(idDailyTopic).subscribe(() => {

      this.dailyTopicService.getDailyTopicsByStudent(this.selectedStudent.getIdPerson())
        .subscribe(dailyTopicsResult => {
          this.dailyTopicsOfSelectedStudent = [];

          dailyTopicsResult.dailyTopics.map(dailyTopic => {
            this.dailyTopicsOfSelectedStudent.push(dailyTopic);
          });
        });

    });
  }

  deleteContact(idContact: string) {
    this.contactService.deleteContact(idContact).subscribe(() => {

      this.contactService.getContactsByStudent(this.selectedStudent.getIdPerson())
        .subscribe(contactsResult => {
          this.contactsOfSelectedStudent = [];

          contactsResult.contacts.map(contact => {
            this.contactsOfSelectedStudent.push(contact);
          });
        });

    });
  }

  updateDailtTopic(): void {
    this.administratorService.updateDailyTopicOnSeeForAStudent(this.selectedStudent.getIdPerson()).subscribe();
  }
}
