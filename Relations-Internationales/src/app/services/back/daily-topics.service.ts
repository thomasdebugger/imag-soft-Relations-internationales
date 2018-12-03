import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DailyTopic } from 'src/app/models/daily-topic';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DailyTopicsService {
  constructor(private readonly http: HttpClient) { }

  getDailyTopics(): Observable<{
    dailyTopics: DailyTopic[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.dailyTopics}`).pipe(
      map(response => {
        return {
          dailyTopics: response['DailyTopic'].map((dailyTopic: DailyTopic) => {
            return new DailyTopic(dailyTopic);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getDailyTopic(idDailyTopic: string): Observable<DailyTopic> {
    const data = this.http.get<object>(`${environment.ip_address}${environment.back.dailyTopics}?idDailyTopic=${idDailyTopic}`);

    return of(new DailyTopic(data));
  }
}
