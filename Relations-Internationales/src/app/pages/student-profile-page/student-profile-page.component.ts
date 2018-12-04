import { Student } from './../../models/student';
import { SimulatorService } from './../../services/simulator/simulator.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import { Course } from 'src/app/models/course';
import { DatePipe } from '@angular/common';
import { CourseDetailModalComponent } from '../course-detail-modal/course-detail-modal.component';
import { Contact } from 'src/app/models/contact';
import { AddContactModalComponent } from '../add-contact-modal/add-contact-modal.component';
import { DailyTopic } from 'src/app/models/daily-topic';
import { AddPrivateLifeModalComponent } from '../add-private-life-modal/add-private-life-modal.component';


@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit {

  name    :String = "";
  ects    : String = "";
  description : String = "";
  affiliation :String ="";
  mail : String = "";
  title : String = "";
  constructor(private simulator: SimulatorService, public dialog: MatDialog, private datePipe: DatePipe) { 
  }


  ngOnInit() {


  }

  displayedColumnsMark: string[] = ['name','ects','description','commentaire'];
  dataSourceMark : MatTableDataSource<Course> = new MatTableDataSource(this.simulator.getCourses());


  displayedColumnsPL: string[] = ['name','dateDailyTopic','description'];
  dataSourcePL : MatTableDataSource<DailyTopic> = new MatTableDataSource(this.simulator.getDailyTopics());


  displayedColumnsContact: string[] = ['lastName','description','affiliation','emailAddress'];
  dataSourceContact : MatTableDataSource<Contact> = new MatTableDataSource(this.simulator.getContacts());
  
  addMark(){
    var newData = this.dataSourceMark.data;
    const dialogRef = this.dialog.open(AddCourseModalComponent, {
      width: '250px',
      data: {name: this.name, ects: this.ects, description : this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      const student1: Student = new Student('person001', 'person001@gmail.com', 'Jean', 'Dupont',
      new Date('22/06/1998'), this.datePipe.transform(new Date(), 'dd-MM-yyyy'), '0610000001',
      'UGA', false, false, [], [], []);

      const course1: Course = new Course('course001', result.name, result.description, result.ects, [], student1, [], []);
      newData.push(course1);
      this.dataSourceMark.data= newData;
    });  

    

  }


  openDetailCourse(course: String, ects: String, description: String){
    const dialogCourse = this.dialog.open(CourseDetailModalComponent,{
      width:'90%',
      data: {courseName : course, ects : ects , description : description}
    });
  }

  addContact(){
    var newData = this.dataSourceContact.data;
    const dialogRef = this.dialog.open(AddContactModalComponent, {
      width: '250px',
      data: {name: this.name, description : this.description, affiliation : this.affiliation, mail : this.mail}
    });

    dialogRef.afterClosed().subscribe(result => {

      const student1: Student = new Student('person001', 'person001@gmail.com', 'Jean', 'Dupont',
      new Date('22/06/1998'), this.datePipe.transform(new Date(), 'dd-MM-yyyy'), '0610000001',
      'UGA', false, false, [], [], []);

      const contact1: Contact = new Contact('cont001', student1, result.mail, 'Lucie', result.name,
      '0620000001', result.affiliation, result.description);

      newData.push(contact1);
      this.dataSourceContact.data= newData;
    });  

  }

  addPrivateLife(){
    var newData = this.dataSourcePL.data;
    const dialogRef = this.dialog.open(AddPrivateLifeModalComponent, {
      width: '250px',
      data: {title: this.title, description : this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      const student1: Student = new Student('person001', 'person001@gmail.com', 'Jean', 'Dupont',
      new Date('22/06/1998'), this.datePipe.transform(new Date(), 'dd-MM-yyyy'), '0610000001',
      'UGA', false, false, [], [], []);

      const dailyTopic1: DailyTopic = new DailyTopic(result.title, new Date('21/07/2016'), result.description,
      'I am well arrived !', student1);

      newData.push(dailyTopic1);
      this.dataSourcePL.data= newData;
    });  

  }
  
}
