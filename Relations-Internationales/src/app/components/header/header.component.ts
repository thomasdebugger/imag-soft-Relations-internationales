import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userInput = new Input();

  private currentLanguage: string;
  private languages: string[];

  constructor() { }

  ngOnInit() {
    this.currentLanguage = 'English';
    this.languages = ['English', 'Francais', 'Italiano'];
  }

  changeLanguage(event): void {
    console.log('Set the language to key ', event);
    this.currentLanguage = event.value;
  }

}
