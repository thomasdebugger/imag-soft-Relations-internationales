import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/models/student';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private readonly http: HttpClient) { }

  getStudents(): Observable<{
    students: Student[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.students}`).pipe(
      map(response => {
        return {
          students: response['Student'].map((student: Student) => {
            return new Student(student);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getStudent(idStudent: string): Observable<Student> {
    const data = this.http.get<object>(`${environment.ip_address}${environment.back.students}?idStudent=${idStudent}`);

    return of(new Student(data));
  }
}
