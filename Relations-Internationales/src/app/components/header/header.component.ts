import { Component, OnInit, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fullNameUser: string;
  @Output() setLanguage = new EventEmitter<string>();

  currentLanguage: string;
  languages: string[];

  constructor(private readonly router: Router, private translate: TranslateService, private readonly loginService: LoginService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.currentLanguage = 'en';
    this.languages = ['en', 'fr'];
  }

  changeLanguage(event): void {
    console.log('Set the language to key ', event);
    this.currentLanguage = event.value;
  }

  switchLanguage(event) {
    this.translate.use(event.value);
    this.setLanguage.emit(event.value);

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.loginService.logOut();
    this.navigateTo('/login');
  }
}
