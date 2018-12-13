import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from '../services/back/student.service';
import { Observable } from 'rxjs';
import { AdministratorService } from '../services/back/administrator.service';

@Injectable()
export class LoginResolver implements Resolve<any> {
    constructor(private readonly studentService: StudentService,
        private readonly administratorService: AdministratorService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (route.queryParams.type === 'student') {
            return this.studentService.getStudent(route.queryParams.idPerson);
        }
        if (route.queryParams.type === 'administrator') {
            return this.administratorService.getAdministrator(route.queryParams.idPerson);
        }
    }
}
