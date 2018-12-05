import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from '../services/back/student.service';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable()
export class StudentsResolver implements Resolve<{
    students: Student[],
    nbRows: number
}> {
    constructor(private readonly studentService: StudentService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{
        students: Student[],
        nbRows: number
    }> {
        return this.studentService.getStudents();
    }
}
