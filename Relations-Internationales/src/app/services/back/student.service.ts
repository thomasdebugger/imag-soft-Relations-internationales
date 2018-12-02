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
            return new Student(
              student['idStudent'],
              student['emailAddress'],
              student['firstName'],
              student['lastName'],
              student['birthDate'],
              student['lastConnectoin'],
              student['phoneNumber'],
              student['university'],
              student['isEntrant'],
              student['isArchived'],
              student['courses'],
              student['contacts'],
              student['dailyToipcs']);
          }),
          nbRows: response['nombre']
        };
      })
    );


    // const data = this.http.get<object>(`${environment.ip_address}${environment.back.students}`);
    // const students: Student[] = data['Student'].pipe(
    //   map(student => new Student(
    //     student['idPerson'],
    //     student['emailAddress'],
    //     student['firstName'],
    //     student['lastName'],
    //     student['birthDate'],
    //     student['lastConnectoin'],
    //     student['phoneNumber'],
    //     student['university'],
    //     student['isEntrant'],
    //     student['isArchived'],
    //     student['courses'],
    //     student['contacts'],
    //     student['dailyToipcs'])
    //   )
    // );

    // return { students: students, nbRows: data['nombre'] };
  }

  getStudent(idStudent: string): Observable<Student> {
    const data = this.http.get<object>(`${environment.ip_address}${environment.back.students}?idStudent=${idStudent}`);

    return of(new Student(
      data['idPerson'],
      data['emailAddress'],
      data['firstName'],
      data['lastName'],
      data['birthDate'],
      data['lastConnectoin'],
      data['phoneNumber'],
      data['university'],
      data['isEntrant'],
      data['isArchived'],
      data['courses'],
      data['contacts'],
      data['dailyToipcs'])
    );
  }
}
