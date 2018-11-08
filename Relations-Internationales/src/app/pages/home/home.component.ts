import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulatorService } from '../../services/simulator/simulator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private simulator: SimulatorService) { }

  ngOnInit() {
    console.log('Welcome to the home component !');
    console.log(this.simulator.getObjectsSimulated());
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
