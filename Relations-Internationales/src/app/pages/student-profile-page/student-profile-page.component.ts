import { Mark } from './../../models/mark';
import { Student } from './../../models/student';
import { SimulatorService } from './../../services/simulator/simulator.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Course } from 'src/app/models/course';


@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit {

  name    :String = "";
  ects    : String = "";
  description : String = "";

  constructor(private simulator: SimulatorService, public dialog: MatDialog) { 
  }


  ngOnInit() {


  }

  displayedColumnsMark: string[] = ['name','ects','description','commentaire'];
  dataSourceMark = this.simulator.getCourses();

  displayedColumnsPL: string[] = ['name','dateDailyTopic','description'];
  dataSourcePL = this.simulator.getDailyTopics();

  displayedColumnsContact: string[] = ['lastName','description','affiliation','emailAddress'];
  dataSourceContact = this.simulator.getContacts();
  
  addElement(){
    const dialogRef = this.dialog.open(AddCourseModalComponent, {
      width: '250px',
      data: {name: this.name, ects: this.ects, description : this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.name);
    });
  }
  
}
