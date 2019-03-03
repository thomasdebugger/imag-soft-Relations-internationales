import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll } from 'src/app/models/poll';
import { environment } from 'src/environments/environment';
import { PossibleAnswer } from 'src/app/models/possible-answer';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private readonly http: HttpClient) { }

  getPolls(): Observable<{
    polls: Poll[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_polls}`).pipe(
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
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_polls}?idPoll=${idPoll}`)
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
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_polls}?idCourse=${idCourse}&idPerson=${idPerson}`).pipe(
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

  addPoll(poll: object): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.add_poll}?question=${poll['question']}&idCourse=${poll['idCourse']}&idPerson=${poll['idPerson']}`);
  }

  addPossibleAnswer(idPoll: string, value: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.add_possibleAnswer}?idPoll=${idPoll}&valuePossibleAnswer=${value}`);
  }

  update_poll(answer: string, idPoll: string) {
    return this.http.get<object>(`${environment.ip_address}${environment.back.update_poll}?idPoll=${idPoll}&answer=${answer}`);
  }
}
