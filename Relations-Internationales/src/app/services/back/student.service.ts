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

  testLogs(login: string, passWord: string): Observable<any> {
    return this.http.get<any>(
      `${environment.ip_address}${environment.back.login_student}?loginStudent=${login}&passWordStudent=${passWord}`
    ).pipe(
      map(response => {
        return response;
      })
    );
  }

  getStudents(): Observable<{
    students: Student[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_students}`).pipe(
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

  getStudent(idPerson: string): Observable<Student> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_students}?idPerson=${idPerson}`)
      .pipe(
        map(students => students['Student']
          .map(student => new Student(student))
        )
      );
  }

  addStudent(student: object): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.add_students}?idPerson=${student['idPerson']}&emailAddress=${student['emailAddress']}&firstName=${student['firstName']}&lastName=${student['lastName']}&birthDate=${student['birthDate']}&lastConnection=${student['lastConnection']}&phoneNumber=${student['phoneNumber']}&university=${student['university']}&isEntrant=${student['isEntrant']}&isArchived=${student['isArchived']}&login=${student['login']}&passWord=${student['passWord']}`);
  }
}
