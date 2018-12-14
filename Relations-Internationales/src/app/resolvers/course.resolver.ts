import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { CourseService } from '../services/back/course.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
    constructor(private readonly courseService: CourseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        return this.courseService.getCourseById(route.params.idCourse);
    }
}
