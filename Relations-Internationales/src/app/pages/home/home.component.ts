import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SimulatorService } from '../../services/simulator/simulator.service';
import { Person } from 'src/app/models/person';
import { Administrator } from 'src/app/models/administrator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: Person;
  private isAdministrator: any;

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute, private simulator: SimulatorService) { }

  ngOnInit() {
    console.log('Welcome to the home component !');
    console.log(this.simulator.getObjectsSimulated());

    const userAdmin = this.simulator.getAdministrators()[0];
    const userStudent = this.simulator.getStudents()[0];

    this.user = userAdmin;
    this.isAdministrator = this.user instanceof Administrator;



    this.activatedRoute.data.subscribe(data => console.log(data));
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
