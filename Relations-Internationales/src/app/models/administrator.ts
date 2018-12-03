import { Person } from './person';

export class Administrator extends Person {

    private idAdministrator: string;

    // constructor(idPerson: string, emailAddress: string, firstName: string, lastName: string,
    //     birthDate: Date, lastConnection: Date, phoneNumber: string,
    //     idAdministrator) {
    //     super(idPerson, emailAddress, firstName, lastName, birthDate, lastConnection, phoneNumber);
    //     this.idAdministrator = idAdministrator;
    // }

    constructor(data: object) {
        const administrator = data || {};
        super(administrator);
        this.idAdministrator = administrator['idAdministrator'];
    }

    public getIdAdministrator(): string { return this.idAdministrator; }

    public setIdAdministrator(value: string): void { this.idAdministrator = this.idAdministrator; }
}
