import { Component } from '@angular/core';
import { SimulatorService } from './services/simulator/simulator.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Relations-Internationales';
  private user: Person;

  constructor(private simulator: SimulatorService) {
    // Todo A faire avec un resolver
    const userAdmin = this.simulator.getAdministrators()[0];
    const userStudent = this.simulator.getStudents()[0];

    this.user = userAdmin;
  }
}
