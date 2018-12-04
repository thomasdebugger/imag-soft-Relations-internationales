import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { Administrator } from 'src/app/models/administrator';
import { AdministratorService } from 'src/app/services/back/administrator.service';
import { PersonService } from 'src/app/services/back/person.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Person;
  isAdministrator: any;
  students: Student[];

  constructor(private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly personService: PersonService) { }

  ngOnInit() {
    let userAdmin: Administrator;
    this.personService.getPerson('5').subscribe(resultPerson => {
      const person = resultPerson;
      person['idAdministrator'] = '5';
      userAdmin = new Administrator(person);
      // const userStudent = this.simulator.getStudents()[0];

      this.user = userAdmin;
      this.isAdministrator = this.user instanceof Administrator;
    });

    this.activatedRoute.data.subscribe(data => {
      this.students = data['studentsResolverResult']['students'];
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
