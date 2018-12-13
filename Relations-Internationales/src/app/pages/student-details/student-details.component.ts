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
    private readonly router: Router) { }

  private selectedStudent: Student;
  private coursesOfSelectedStudent: Course[];
  private contactsOfSelectedStudent: Contact[];
  private dailyTopicsOfSelectedStudent: DailyTopic[];

  private marks: { idCourse: string; marks: Mark[] }[] = [];
  private selectedCourse: Course;

  ngOnInit() {
    this.coursesOfSelectedStudent = [];
    this.contactsOfSelectedStudent = [];
    this.dailyTopicsOfSelectedStudent = [];

    this.activatedRoute.data.subscribe(data => {
      console.log(data);
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
        console.log('Course dialog opened.');
        dialogRef = this.dialog.open(AddCourseDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => console.log('Course dialog closed : ', result));
        break;
      case 'dailyTopic':
        console.log('DailyTopic dialog opened.');
        dialogRef = this.dialog.open(AddDailyTopicDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => console.log('DailyTopic dialog closed : ', result));
        break;
      case 'contact':
        console.log('Contact dialog opened.');
        dialogRef = this.dialog.open(AddContactDialogComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(result => console.log('Contact dialog closed : ', result));
        break;
    }
  }

  displaySendEmailDialog(): void {
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';
    matDialogConfig.data = this.selectedStudent;

    console.log('Send email dialog opened.');
    dialogRef = this.dialog.open(SendEmailDialogComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(result => console.log('Send email dialog closed : ', result));
  }

  setSelectedCourse(selectedCourse: Course): void {
    this.selectedCourse = selectedCourse;
  }

  setIsLearningAgreementValid(): void {
    this.selectedStudent.setIsLearningAgreementValid({
      value: !this.selectedStudent.getIsLearningAgreementValid().value, date: new Date()
    });
  }

  getNbEcts(): number {
    let nbEcts = 0;

    this.coursesOfSelectedStudent.forEach(courseOfSelectedStudent => {
      nbEcts = nbEcts + courseOfSelectedStudent.getEcts();
    });

    return nbEcts;
  }

  goToStudentList(): void {
    this.router.navigate(['/']);
  }

  async generatePDF() {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();

    // await page.goto(this.router.url);
    // await page.screenshot({ path: `${this.selectedStudent.getIdPerson()}_${new Date().toDateString()}` });
    // await browser.close();
  }
}
