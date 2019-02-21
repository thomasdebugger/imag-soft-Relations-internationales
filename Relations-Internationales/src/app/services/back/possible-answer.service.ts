import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PossibleAnswer } from 'src/app/models/possible-answer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PossibleAnswerService {

  constructor(private readonly http: HttpClient) { }

  getPossibleAnswersByPoll(idPoll: string): Observable<{
    possibleAnswers: PossibleAnswer[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_possibleAnswers}?idPoll=${idPoll}`).pipe(
      map(response => {
        console.log("rep = " , response);
        return {
          possibleAnswers: response['PossibleAnswer'].map((possibleAnswer: PossibleAnswer) => {
            
            return new PossibleAnswer(possibleAnswer);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }
}
