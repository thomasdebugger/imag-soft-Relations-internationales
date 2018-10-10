import { Student } from './student';

export class DailyTopic {

    private idDailyTopic: string;
    private dateDailyTopic: Date;
    private description: string;
    private name: string;
    private student: Student;

    constructor(idDailyTopic: string, dateDailyTopic: Date, description: string, name: string, student: Student) {
        this.idDailyTopic = idDailyTopic;
        this.dateDailyTopic = dateDailyTopic;
        this.description = description;
        this.name = name;
        this.student = student;
    }

    public getIdDailyTopic(): string { return this.idDailyTopic; }
    public getDateDailyTopic(): Date { return this.dateDailyTopic; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getStudent(): Student { return this.student; }

    public setIdDailyTopic(value: string): void { this.idDailyTopic = value; }
    public setDateDailyTopic(value: Date): void { this.dateDailyTopic = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setStudent(value: Student): void { this.student = value; }
}
