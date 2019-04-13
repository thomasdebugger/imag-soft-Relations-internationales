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
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_courses}`).pipe(
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

  getCourseById(idCourse: string): Observable<Course> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_courses}?idCourse=${idCourse}`)
      .pipe(
        map(courses => courses['Course']
          .map(course => new Course(course))
        )
      );
  }

  getCoursesByStudent(idPerson: string): Observable<{
    courses: Course[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_courses}?idPerson=${idPerson}`).pipe(
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

  addCourse(course: object): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.add_course}?idPerson=${course['idPerson']}&description=${course['description']}&name=${course['name']}&ects=${course['ects']}&lastCommentary=${course['lastCommentary']}&teacherFullName=${course['teacherFullName']}&teacherEmail=${course['teacherEmail']}&semester=${course['semester']}`);
  }

  deleteCourse(idCourse: string): Observable<any> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.delete_course}?idCourse=${idCourse}`);
  }

  rejectCourse(idCourse: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.update_state_course}?idCourse=${idCourse}&stateToUpdate=rejected`);
  }
}
