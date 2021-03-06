import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactService } from '../services/back/contact.service';

@Injectable()
export class ContactsResolver implements Resolve<{
    contacts: Contact[],
    nbRows: number
}> {
    constructor(private readonly contactService: ContactService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{
        contacts: Contact[],
        nbRows: number
    }> {
        if (localStorage.getItem('type') === 'administrator') {
            return this.contactService.getContactsByStudent(route.params.idPerson);
        }
        return this.contactService.getContactsByStudent(localStorage.getItem('idPerson'));
    }
}
