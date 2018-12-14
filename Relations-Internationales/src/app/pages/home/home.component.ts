import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administrator } from 'src/app/models/administrator';
import { AdministratorService } from 'src/app/services/back/administrator.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  isAdministrator: any;
  students: Student[];

  constructor(private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly administratorService: AdministratorService) { }

  ngOnInit() {
    let userAdmin: Administrator;
    this.administratorService.getAdministrator('5').subscribe(resultAdministrator => {
      const person = resultAdministrator;
      person['idPerson'] = '5';
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
