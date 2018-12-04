import { Component } from '@angular/core';
import { Person } from './models/person';
import { AdministratorService } from './services/back/administrator.service';
import { Administrator } from './models/administrator';
import { PersonService } from './services/back/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Relations-Internationales';
  private user: Person;

  constructor(private readonly personService: PersonService) {
    // Todo A faire avec un resolver
    let userAdmin: Administrator;
    this.personService.getPerson('5').subscribe(resultPerson => {
      const person = resultPerson;
      person['idAdministrator'] = '5';
      userAdmin = new Administrator(person);
      // const userStudent = this.simulator.getStudents()[0];

      this.user = userAdmin;
    });
  }
}
