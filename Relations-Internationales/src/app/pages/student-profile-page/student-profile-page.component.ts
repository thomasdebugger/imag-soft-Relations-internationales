import { Student } from './../../models/student';
import { SimulatorService } from './../../services/simulator/simulator.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import { Course } from 'src/app/models/course';
import { DatePipe } from '@angular/common';
import { CourseDetailModalComponent } from '../course-detail-modal/course-detail-modal.component';
import { Contact } from 'src/app/models/contact';
import { AddContactModalComponent } from '../add-contact-modal/add-contact-modal.component';
import { DailyTopic } from 'src/app/models/daily-topic';
import { AddPrivateLifeModalComponent } from '../add-private-life-modal/add-private-life-modal.component';
import { MarkService } from 'src/app/services/back/mark.service';
import { ActivatedRoute } from '@angular/router';
import { Mark } from 'src/app/models/mark';


@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit {

  name: String = '';
  ects: String = '';
  description: String = '';
  affiliation: String = '';
  mail: String = '';
  title: String = '';

  

  @Input() selectedStudent: Student = null;
  @Input() coursesOfSelectedStudent: Course[] = [];
  @Input() contactsOfSelectedStudent: Contact[] = [];
  @Input() dailyTopicsOfSelectedStudent: DailyTopic[] = [];

  private marks: { idCourse: string; marks: Mark[] }[] = [];
  private selectedCourse: Course;

  displayedColumnsMark: string[] = ['name', 'ects', 'description', 'commentaire'];
  displayedColumnsPL: string[] = ['name', 'dateDailyTopic', 'description'];
  displayedColumnsContact: string[] = ['lastName', 'description', 'affiliation', 'emailAddress'];

  

  dataSourceMark: MatTableDataSource<Course> = null;
  dataSourcePL: MatTableDataSource<DailyTopic> =null;
  dataSourceContact: MatTableDataSource<Contact> = null;

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private datePipe: DatePipe, private readonly markService: MarkService) {
  }


  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      console.log(data);
     

      this.coursesOfSelectedStudent.forEach(course => {
        this.markService.getMarksByStudent(course.getIdCourse(), this.selectedStudent.getIdPerson())
          .subscribe(result => {
            const marksByCourse = { idCourse: course.getIdCourse(), marks: [] };
            result['marks'].forEach(mark => marksByCourse.marks.push(mark));
            this.marks.push(marksByCourse);
          });
      });
      this.dataSourceMark = new MatTableDataSource(this.coursesOfSelectedStudent);
      this.dataSourcePL = new MatTableDataSource(this.dailyTopicsOfSelectedStudent);
      this.dataSourceContact = new MatTableDataSource(this.contactsOfSelectedStudent);
    
    });
  
    
  }

  


  

  addMark() {
     var newData = this.dataSourceMark.data;
     const dialogRef = this.dialog.open(AddCourseModalComponent, {
       width: '250px',
       data: { name: this.name, ects: this.ects, description: this.description }
     });

     dialogRef.afterClosed().subscribe(result => {

      const newCourse = new Course({
        idCourse: null,
        name:result.name,
        description: result.description,
        ects: result.ects,
        teacherFullName: '',
        teacherEmail: '',
        idPerson: this.selectedStudent.getIdPerson()
      });
       newData.push(newCourse);
       this.dataSourceMark.data = newData;
     });

  }


  openDetailCourse(course: String, ects: String, description: String) {
    const dialogCourse = this.dialog.open(CourseDetailModalComponent, {
      width: '90%',
      data: { courseName: course, ects: ects, description: description }
    });
  }

  addContact() {

     var newData = this.dataSourceContact.data;
     const dialogRef = this.dialog.open(AddContactModalComponent, {
       width: '250px',
       data: { name: this.name, description: this.description, affiliation: this.affiliation, mail: this.mail }
     });

     dialogRef.afterClosed().subscribe(result => {

      
       const newContact = new Contact({
        idContact: null,
        idPerson: this.selectedStudent.getIdPerson(),
        emailAddress: result.mail,
        firstName: ' ',
        lastName: result.name,
        phoneNumber: ' ',
        affiliation: result.affiliation,
        description: result.description
      });
      console.log(newContact);
       newData.push(newContact);
       this.dataSourceContact.data = newData;
       
     });

  }

  addPrivateLife() {
     var newData = this.dataSourcePL.data;
     const dialogRef = this.dialog.open(AddPrivateLifeModalComponent, {
       width: '250px',
       data: { title: this.title, description: this.description }
     });

     dialogRef.afterClosed().subscribe(result => {

      const newDailyTopic = new DailyTopic({
        idDailyTopic: null,
        dateDailyTopic: new Date(),
        description: result.description,
        name: result.title,
        idPerson: this.selectedStudent.getIdPerson()
      });

       newData.push(newDailyTopic);
       this.dataSourcePL.data = newData;
     });

  }

}
