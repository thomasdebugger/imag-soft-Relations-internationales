import { Injectable } from '@angular/core';
import { Administrator } from 'src/app/models/administrator';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  constructor(private readonly http: HttpClient) { }

  testLogs(login: string, passWord: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.ip_address}${environment.back.login_administrator}?loginAdministrator=${login}&passWordAdministrator=${passWord}`
    );
  }

  getAdministrators(): Observable<{
    administrators: Administrator[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.administrators}`).pipe(
      map(response => {
        return {
          administrators: response['Administrator'].map((administrator: Administrator) => {
            return new Administrator(administrator);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getAdministrator(idPerson: string): Observable<Administrator> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.administrators}?idPerson=${idPerson}`)
      .pipe(
        map(administrators => administrators['Administrator']
          .map(administrator => new Administrator(administrator))
        )
      );
  }
}
