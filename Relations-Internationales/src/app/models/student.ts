import { Contact } from './contact';
import { Course } from './course';
import { DailyTopic } from './daily-topic';

export class Student {

    private idPerson: string;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private birthDate: Date;
    private lastConnection: Date;
    private phoneNumber: string;
    private university: string;
    private isEntrant: boolean;
    private isArchived: boolean;
    private isLearningAgreementValid: { value: boolean, date: Date };

    constructor(data: object) {
        const student = data || {};

        this.idPerson = student['idPerson'];
        this.emailAddress = student['emailAddress'];
        this.firstName = student['firstName'];
        this.lastName = student['lastName'];
        this.birthDate = student['birthDate'];
        this.lastConnection = student['lastConnection'];
        this.phoneNumber = student['phoneNumber'];
        this.university = student['university'];
        this.isEntrant = student['isEntrant'] === 1 ? true : false;
        this.isArchived = student['isArchived'] === 1 ? true : false;
        this.isLearningAgreementValid = { value: false, date: null };
    }

    public getIdPerson(): string { return this.idPerson; }
    public getEmailAddress(): string { return this.emailAddress; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }
    public getBirthDate(): Date { return this.birthDate; }
    public getLastConnection(): Date { return this.lastConnection; }
    public getPhoneNumber(): string { return this.phoneNumber; }
    public getUniversity(): string { return this.university; }
    public getIsEntrant(): boolean { return this.isEntrant; }
    public getIsArchived(): boolean { return this.isArchived; }
    public getIsLearningAgreementValid(): { value: boolean, date: Date } { return this.isLearningAgreementValid; }

    public setIdPerson(value: string): void { this.idPerson = value; }
    public setEmailAddress(value: string): void { this.emailAddress = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
    public setBirthDate(value: Date): void { this.birthDate = value; }
    public setLastConnection(value: Date): void { this.lastConnection = value; }
    public setPhoneNumber(value: string): void { this.phoneNumber = value; }
    public setUniversity(value: string): void { this.university = value; }
    public setIsEntrant(value: boolean): void { this.isEntrant = value; }
    public setIsArchived(value: boolean): void { this.isArchived = value; }
    public setIsLearningAgreementValid(value: { value: boolean, date: Date }): void { this.isLearningAgreementValid = value; }
}
