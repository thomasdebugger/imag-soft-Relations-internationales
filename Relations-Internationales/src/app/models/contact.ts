export class Contact {

    private idContact: string;
    private idStudent: string;
    private emailAddress: string;
    private firstName: string;
    private lastName: string;
    private phoneNumber: string;
    private affiliation: string;
    private description: string;

    constructor(idContact: string, idStudent: string, emailAddress: string, firstName: string, lastName: string,
        phoneNumber: string, affiliation: string, description: string) {
        this.idContact = idContact;
        this.idStudent = idStudent;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.affiliation = affiliation;
        this.description = description;
    }

    public getIdContact(): string { return this.idContact; }
    public getIdStudent(): string { return this.idStudent; }
    public getEmailAddress(): string { return this.emailAddress; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }
    public getPhoneNumber(): string { return this.phoneNumber; }
    public getAffiliation(): string { return this.affiliation; }
    public getDescription(): string { return this.description; }

    public setIdContact(value: string): void { this.idContact = value; }
    public setIdStudent(value: string): void { this.idStudent = value; }
    public setEmailAddress(value: string): void { this.emailAddress = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
    public setPhoneNumber(value: string): void { this.phoneNumber = value; }
    public setAffiliation(value: string): void { this.affiliation = value; }
    public setDescription(value: string): void { this.description = value; }
}
