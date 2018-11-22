import { Student } from './../../models/student';
import { SimulatorService } from './../../services/simulator/simulator.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import { Course } from 'src/app/models/course';
import { DatePipe } from '@angular/common';
import { CourseDetailModalComponent } from '../course-detail-modal/course-detail-modal.component';


@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit {

  name    :String = "";
  ects    : String = "";
  description : String = "";

  constructor(private simulator: SimulatorService, public dialog: MatDialog, private datePipe: DatePipe) { 
  }


  ngOnInit() {


  }

  displayedColumnsMark: string[] = ['name','ects','description','commentaire'];
  dataSourceMark : MatTableDataSource<Course> = new MatTableDataSource(this.simulator.getCourses());


  displayedColumnsPL: string[] = ['name','dateDailyTopic','description'];
  dataSourcePL = this.simulator.getDailyTopics();

  displayedColumnsContact: string[] = ['lastName','description','affiliation','emailAddress'];
  dataSourceContact = this.simulator.getContacts();
  
  addElement(){
    var newData = this.dataSourceMark.data;
    const dialogRef = this.dialog.open(AddCourseModalComponent, {
      width: '250px',
      data: {name: this.name, ects: this.ects, description : this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.ects);

      const student1: Student = new Student('person001', 'person001@gmail.com', 'Jean', 'Dupont',
      new Date('22/06/1998'), this.datePipe.transform(new Date(), 'dd-MM-yyyy'), '0610000001',
      'UGA', false, false, [], [], []);

      const course1: Course = new Course('course001', result.name, result.descirption, result.ects, [], student1, [], []);

      
      newData.push(course1);
      
      console.log(this.dataSourceMark);
    });  

    this.dataSourceMark.data= newData;

  }


  openDetailCourse(course: String, ects: String, description: String){
    console.log(course);
    const dialogCourse = this.dialog.open(CourseDetailModalComponent,{
      width:'90%',
      data: {courseName : course, ects : ects , description : description}
    });
  }
  
}
