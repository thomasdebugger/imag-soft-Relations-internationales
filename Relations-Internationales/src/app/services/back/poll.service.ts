import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll } from 'src/app/models/poll';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private readonly http: HttpClient) { }

  getPolls(): Observable<{
    polls: Poll[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.polls}`).pipe(
      map(response => {
        return {
          polls: response['Poll'].map((poll: Poll) => {
            return new Poll(poll);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getPollById(idPoll: string): Observable<Poll> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.polls}?idPoll=${idPoll}`)
      .pipe(
        map(polls => polls['Poll']
          .map(poll => new Poll(poll))
        )
      );
  }

  getPollsByStudent(idCourse: string, idPerson: string): Observable<{
    polls: Poll[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.polls}?idCourse=${idCourse}&idPerson=${idPerson}`).pipe(
      map(response => {
        return {
          polls: response['Poll'].map((poll: Poll) => {
            return new Poll(poll);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }
}
