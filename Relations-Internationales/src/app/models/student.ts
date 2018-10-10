import { Person } from './person';
import { Contact } from './contact';

export class Student extends Person {

    private university: string;
    private isEntrant: boolean;
    private isArchived: boolean;
    private contacts: Contact[];

    constructor(idPerson: string, emailAddress: string, firstName: string, lastName: string,
        birthDate: Date, lastConnection: string, phoneNumber: string,
        university: string, isEntrant: boolean, isArchived: boolean, contacts: Contact[]) {
        super(idPerson, emailAddress, firstName, lastName, birthDate, lastConnection, phoneNumber);
        this.university = university;
        this.isEntrant = isEntrant;
        this.isArchived = isArchived;
    }

    public getUniversity(): string { return this.university; }
    public getIsEntrant(): boolean { return this.isEntrant; }
    public getIsArchived(): boolean { return this.isArchived; }
    public getContacts(): Contact[] { return this.contacts; }

    public setUniversity(value: string): void { this.university = value; }
    public setIsEntrant(value: boolean): void { this.isEntrant = value; }
    public setIsArchived(value: boolean): void { this.isArchived = value; }
    public setContacts(value: Contact[]): void { this.contacts = value; }
}
