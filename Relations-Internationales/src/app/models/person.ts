export class Person {

    private idPerson: string;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private birthDate: Date;
    private lastConnection: Date;
    private phoneNumber: string;

    constructor(idPerson: string, emailAddress: string, firstName: string, lastName: string,
        birthDate: Date, lastConnection: Date, phoneNumber: string) {
        this.idPerson = idPerson;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.lastConnection = lastConnection;
        this.phoneNumber = phoneNumber;
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
