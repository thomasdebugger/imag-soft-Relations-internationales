import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { Student } from 'src/app/models/student';
import { Course } from 'src/app/models/course';
import { Contact } from 'src/app/models/contact';
import { DailyTopic } from 'src/app/models/daily-topic';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddCourseDialogComponent } from 'src/app/components/add-element-dialog/add-course-dialog/add-course-dialog.component';
import { AddContactDialogComponent } from 'src/app/components/add-element-dialog/add-contact-dialog/add-contact-dialog.component';
import { AddDailyTopicDialogComponent } from 'src/app/components/add-element-dialog/add-daily-topic-dialog/add-daily-topic-dialog.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private simulator: SimulatorService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router) { }

  private selectedStudent: Student;
  private coursesOfSelectedStudent: Course[];
  private contactsOfSelectedStudent: Contact[];
  private dailyTopicsOfSelectedStudent: DailyTopic[];

  private selectedCourse: Course;

  // Simulator attributes
  private simulatedStudents: Student[];
  private simulatedCourses: Course[];
  private simulatedContacts: Contact[];
  private simulatedDailyTopics: DailyTopic[];

  ngOnInit() {
    this.simulatedStudents = [];
    this.simulatedCourses = [];
    this.simulatedContacts = [];
    this.simulatedDailyTopics = [];
    this.coursesOfSelectedStudent = [];
    this.contactsOfSelectedStudent = [];
    this.dailyTopicsOfSelectedStudent = [];

    this.simulator.getObjectsSimulated().forEach(lists => {
      lists.forEach(object => {
        if (object instanceof Student) { this.simulatedStudents.push(object); }
        if (object instanceof Course) { this.simulatedCourses.push(object); }
        if (object instanceof Contact) { this.simulatedContacts.push(object); }
        if (object instanceof DailyTopic) { this.simulatedDailyTopics.push(object); }
      });
    });

    this.activatedRoute.params.subscribe(params => {
      // TODO Faire getStudent(idPerson) depuis le back
      // TODO Faire getCourses(idPerson) depuis le back

      this.simulatedStudents.forEach(student => {
        // Recuperation du student selectionne
        if (student.getIdPerson() === params.idPerson) {
          this.selectedStudent = student;

          // Recuperation des cours du student selectionne
          this.simulatedCourses.forEach(course => {
            if (course.getStudent().getIdPerson() === this.selectedStudent.getIdPerson()) {
              this.coursesOfSelectedStudent.push(course);
            }
          });
          // Recuperation des contacts du student selectionne
          this.simulatedContacts.forEach(contact => {
            if (contact.getStudent().getIdPerson() === this.selectedStudent.getIdPerson()) {
              this.contactsOfSelectedStudent.push(contact);
            }
          });
          // Recuperation des contacts du student selectionne
          this.simulatedDailyTopics.forEach(dailyTopic => {
            if (dailyTopic.getStudent().getIdPerson() === this.selectedStudent.getIdPerson()) {
              this.dailyTopicsOfSelectedStudent.push(dailyTopic);
            }
          });
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

  setSelectedCourse(selectedCourse: Course): void {
    this.selectedCourse = selectedCourse;
  }
}
