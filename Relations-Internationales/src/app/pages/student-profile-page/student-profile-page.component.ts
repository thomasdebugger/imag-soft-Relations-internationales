import { Mark } from './../../models/mark';
import { Student } from './../../models/student';
import { SimulatorService } from './../../services/simulator/simulator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit {

  mark    : Mark[];

  constructor(private simulator: SimulatorService) { 
  }


  ngOnInit() {
    this.mark    = this.simulator.getMarks();
    console.log(this.mark);

  }

  displayedColumnsMark: string[] = ['name','ects','description','commentaire'];
  dataSourceMark = this.simulator.getCourses();

  displayedColumnsPL: string[] = ['name','dateDailyTopic','description'];
  dataSourcePL = this.simulator.getDailyTopics();

  displayedColumnsContact: string[] = ['lastName','description','affiliation','emailAddress'];
  dataSourceContact = this.simulator.getContacts();
  
  addElement(){
    
  }
}
