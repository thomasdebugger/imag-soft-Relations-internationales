import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { StudentService } from 'src/app/services/back/student.service';
import { AdministratorService } from 'src/app/services/back/administrator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  passWord: string;
  logs: { idPerson: string; type: string };
  hasLoginFailed: boolean;

  constructor(private router: Router,
    private readonly studentService: StudentService,
    private readonly administratorService: AdministratorService) { }

  ngOnInit() {
    this.login = '';
    this.passWord = '';
    this.logs = { idPerson: 'none', type: 'none' };
    this.hasLoginFailed = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  connexion() {
    this.hasLoginFailed = true;
    this.studentService.testLogs(this.login, this.passWord).subscribe(resultStudent => {
      if (resultStudent['result']) {
        this.hasLoginFailed = false;
        this.logs.idPerson = resultStudent['result'];
        this.logs.type = 'student';
        this.router.navigate(['home'], { queryParams: this.logs });
      } else {
        this.administratorService.testLogs(this.login, this.passWord).subscribe(resultAdmin => {
          if (resultAdmin['result']) {
            this.hasLoginFailed = false;
            this.logs.idPerson = resultAdmin['result'];
            this.logs.type = 'administrator';
            this.router.navigate(['home'], { queryParams: this.logs });
          }
        });
      }
    });
  }
}
