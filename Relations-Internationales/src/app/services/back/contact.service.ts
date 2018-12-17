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
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_contacts}`).pipe(
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

  getContactById(idContact: string): Observable<Contact> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_contacts}?idContact=${idContact}`)
      .pipe(
        map(contacts => contacts['Contact']
          .map(contact => new Contact(contact))
        )
      );
  }

  getContactsByStudent(idPerson: string): Observable<{
    contacts: Contact[],
    nbRows: number
  }> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.get_contacts}?idPerson=${idPerson}`).pipe(
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

  addContact(contact: object): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<object>(`${environment.ip_address}${environment.back.add_contact}?idPerson=${contact['idPerson']}&emailAddress=${contact['emailAddress']}&firstName=${contact['firstName']}&lastName=${contact['lastName']}&phoneNumber=${contact['phoneNumber']}&affiliation=${contact['affiliation']}&description=${contact['description']}`);
  }

  deleteContact(idContact: string): Observable<any> {
    return this.http.get<object>(`${environment.ip_address}${environment.back.delete_contact}?idContact=${idContact}`);
  }
}
