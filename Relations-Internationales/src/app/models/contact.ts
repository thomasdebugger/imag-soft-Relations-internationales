import { Student } from './student';

export class Contact {

    private idContact: string;
    private idPerson: string;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private phoneNumber: string;
    private affiliation: string;
    private description: string;

    // constructor(idContact: string, student: Student, emailAddress: string, firstName: string, lastName: string,
    //     phoneNumber: string, affiliation: string, description: string) {
    //     this.idContact = idContact;
    //     this.student = student;
    //     this.emailAddress = emailAddress;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.phoneNumber = phoneNumber;
    //     this.affiliation = affiliation;
    //     this.description = description;

    //     this.student.getContacts().push(this);
    // }

    constructor(data: object) {
        const contact = data || {};
        this.idContact = contact['idContact'];
        this.idPerson = contact['idPerson'];
        this.emailAddress = contact['emailAddress'];
        this.firstName = contact['firstName'];
        this.lastName = contact['lastName'];
        this.phoneNumber = contact['phoneNumber'];
        this.affiliation = contact['affiliation'];
        this.description = contact['description'];
    }

    public getIdContact(): string { return this.idContact; }
    public getIdPerson(): string { return this.idPerson; }
    public getEmailAddress(): string { return this.emailAddress; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }
    public getPhoneNumber(): string { return this.phoneNumber; }
    public getAffiliation(): string { return this.affiliation; }
    public getDescription(): string { return this.description; }

    public setIdContact(value: string): void { this.idContact = value; }
    public setIdPerson(value: string): void { this.idPerson = value; }
    public setEmailAddress(value: string): void { this.emailAddress = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
    public setPhoneNumber(value: string): void { this.phoneNumber = value; }
    public setAffiliation(value: string): void { this.affiliation = value; }
    public setDescription(value: string): void { this.description = value; }
}
