import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private readonly http: HttpClient) { }

  getCourses(): Observable<{
    courses: Course[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.courses}`).pipe(
      map(response => {
        return {
          courses: response['Course'].map((course: Course) => {
            return new Course(course);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getCourse(idCourse: string): Observable<Course> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.courses}?idCourse=${idCourse}`)
      .pipe(
        map(courses => courses['Course']
          .map(course => new Course(course))
        )
      );
  }
}
