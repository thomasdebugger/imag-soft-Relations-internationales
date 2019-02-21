import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StudentService } from '../services/back/student.service';
import { Observable } from 'rxjs';
import { AdministratorService } from '../services/back/administrator.service';

@Injectable()
export class LoginResolver implements Resolve<any> {
    constructor(private readonly studentService: StudentService,
        private readonly administratorService: AdministratorService,
        private readonly router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (route.queryParams.type === 'student') {
            const studentToReturn = this.studentService.getStudent(route.queryParams.idPerson);
            console.log(route.queryParams);

            studentToReturn.subscribe(student => {
                if (!student[0]
                    || this.isDifferenceBetweenDateGreaterThanOneDay(new Date(student[0].lastConnection)) > 1) {
                    this.router.navigate(['/login']);
                    return null;
                }
            });
            return studentToReturn;
        }
        if (route.queryParams.type === 'administrator') {
            const administratorToReturn = this.administratorService.getAdministrator(route.queryParams.idPerson);

            administratorToReturn.subscribe(administrator => {
                if (!administrator[0]
                    || this.isDifferenceBetweenDateGreaterThanOneDay(new Date(administrator[0].lastConnection)) > 1) {
                    this.router.navigate(['/login']);
                    return null;
                }
            });
            return administratorToReturn;
        }

        this.router.navigate(['/login']);
        return null;
    }

    private isDifferenceBetweenDateGreaterThanOneDay(date: Date): number {
        // Get 1 day in milliseconds
        const one_day = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        const today = new Date().getTime();
        const lastConnection = date.getTime();

        // Calculate the difference in milliseconds
        const difference_ms = today - lastConnection;

        // Convert back to days and return
        return Math.round(difference_ms / one_day);
    }
}
