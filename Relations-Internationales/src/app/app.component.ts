import { Component } from '@angular/core';
import { Administrator } from './models/administrator';
import { AdministratorService } from './services/back/administrator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Relations-Internationales';
  private user: any;

  constructor(private readonly administratorService: AdministratorService) {
    // Todo A faire avec un resolver
    this.administratorService.getAdministrator('5').subscribe(resultPerson => {
      // const userStudent = this.simulator.getStudents()[0];
      this.user = new Administrator(resultPerson[0]);
    });
  }
}
