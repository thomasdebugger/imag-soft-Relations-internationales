import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private readonly http: HttpClient) { }

  getPersons(): Observable<{
    persons: Person[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.persons}`).pipe(
      map(response => {
        return {
          persons: response['Person'].map((person: Person) => {
            return new Person(person);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getPerson(idPerson: string): Observable<Person> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.persons}?idPerson=${idPerson}`)
      .pipe(
        map(persons => persons['Person']
          .map(person => new Person(person))
        )
      );
  }
}
