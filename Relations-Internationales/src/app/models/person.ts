export class Person {

    private idPerson: string;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private birthDate: Date;
    private lastConnection: Date;
    private phoneNumber: string;

    constructor(data: object) {
        const person = data || {};
        this.idPerson = person['idPerson'];
        this.emailAddress = person['emailAddress'];
        this.firstName = person['firstName'];
        this.lastName = person['lastName'];
        this.birthDate = person['birthDate'];
        this.lastConnection = person['lastConnection'];
        this.phoneNumber = person['phoneNumber'];
    }

    public getIdPerson(): string { return this.idPerson; }
    public getEmailAddress(): string { return this.emailAddress; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }
    public getBirthDate(): Date { return this.birthDate; }
    public getLastConnection(): Date { return this.lastConnection; }
    public getPhoneNumber(): string { return this.phoneNumber; }

    public setIdPerson(value: string): void { this.idPerson = value; }
    public setEmailAddress(value: string): void { this.emailAddress = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
    public setBirthDate(value: Date): void { this.birthDate = value; }
    public setLastConnection(value: Date): void { this.lastConnection = value; }
    public setPhoneNumber(value: string): void { this.phoneNumber = value; }
}
