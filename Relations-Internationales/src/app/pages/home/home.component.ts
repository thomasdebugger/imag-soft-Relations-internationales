import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administrator } from 'src/app/models/administrator';
import { AdministratorService } from 'src/app/services/back/administrator.service';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/back/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userConnected: Student | Administrator;
  isAdministrator: any;
  students: Student[] = [];
  fullNameUser: string;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly studentService: StudentService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isAdministrator = (queryParams.type === 'administrator');

      this.activatedRoute.data.subscribe(data => {
        this.userConnected = this.isAdministrator
          ? new Administrator(data['loginResolverResult'][0])
          : new Student(data['loginResolverResult'][0]);

        this.students = this.userConnected instanceof Administrator
          ? data['studentsResolverResult']['students']
          : null;

        this.fullNameUser = this.userConnected.getFirstName() + ' ' + this.userConnected.getLastName();
      });
    });
  }
}
