import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private readonly http: HttpClient) { }

  getContacts(): Observable<{
    contacts: Contact[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.contacts}`).pipe(
      map(response => {
        return {
          contacts: response['Contact'].map((contact: Contact) => {
            return new Contact(contact);
          }),
          nbRows: response['nombre']
        };
      })
    );
  }

  getContact(idContact: string): Observable<Contact> {
    const data = this.http.get<object>(`${environment.ip_address}${environment.back.contacts}?idContact=${idContact}`);

    return of(new Contact(data));
  }
}
