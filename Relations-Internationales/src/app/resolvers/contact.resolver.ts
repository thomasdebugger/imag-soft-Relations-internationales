import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactService } from '../services/back/contact.service';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
    constructor(private readonly contactService: ContactService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
        return this.contactService.getContactById(route.params.idContact);
    }
}
