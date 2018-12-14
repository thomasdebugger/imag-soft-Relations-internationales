import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fullNameUser: string;

  currentLanguage: string;
  languages: string[];

  constructor(private readonly router: Router, private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.currentLanguage = 'English';
    this.languages = ['English', 'Francais', 'Italiano'];
  }

  changeLanguage(event): void {
    console.log('Set the language to key ', event);
    this.currentLanguage = event.value;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
