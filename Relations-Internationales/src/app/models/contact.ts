import { Student } from './student';

export class Contact {

    private idContact: string;
    private student: Student;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private phoneNumber: string;
    private affiliation: string;
    private description: string;

    constructor(idContact: string, student: Student, emailAddress: string, firstName: string, lastName: string,
        phoneNumber: string, affiliation: string, description: string) {
        this.idContact = idContact;
        this.student = student;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.affiliation = affiliation;
        this.description = description;

        this.student.getContacts().push(this);
    }

    public getIdContact(): string { return this.idContact; }
    public getStudent(): Student { return this.student; }
    public getEmailAddress(): string { return this.emailAddress; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }
    public getPhoneNumber(): string { return this.phoneNumber; }
    public getAffiliation(): string { return this.affiliation; }
    public getDescription(): string { return this.description; }

    public setIdContact(value: string): void { this.idContact = value; }
    public setIdStudent(value: Student): void { this.student = value; }
    public setEmailAddress(value: string): void { this.emailAddress = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
    public setPhoneNumber(value: string): void { this.phoneNumber = value; }
    public setAffiliation(value: string): void { this.affiliation = value; }
    public setDescription(value: string): void { this.description = value; }
}
