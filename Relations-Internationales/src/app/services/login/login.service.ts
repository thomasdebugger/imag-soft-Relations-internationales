import { Injectable } from '@angular/core';
import { StudentService } from '../back/student.service';
import { AdministratorService } from '../back/administrator.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly studentService: StudentService,
    private readonly administratorService: AdministratorService) { }

  logIn(login: string, passWord: string) {
    this.studentService.testLogs(login, passWord).subscribe(resultStudent => {
      if (resultStudent['result'] !== 0) {
        return 'student';
      } else {
        this.administratorService.testLogs(login, passWord).subscribe(resultAdmin => {
          if (resultAdmin['result'] !== 0) {
            return 'administrator';
          }
        });
      }
    });
  }
}
