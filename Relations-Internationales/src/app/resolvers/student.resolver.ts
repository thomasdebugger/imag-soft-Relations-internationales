import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from '../services/back/student.service';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable()
export class StudentResolver implements Resolve<Student> {
    constructor(private readonly studentService: StudentService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student> {
        if (localStorage.getItem('type') === 'administrator') {
            return this.studentService.getStudent(route.params.idPerson);
        }
        return this.studentService.getStudent(localStorage.getItem('idPerson'));
    }
}
