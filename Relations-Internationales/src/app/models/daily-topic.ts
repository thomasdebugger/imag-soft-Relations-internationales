export class DailyTopic {

    private idDailyTopic: string;
    private dateDailyTopic: Date;
    private description: string;
    private name: string;

    constructor(idDailyTopic: string, dateDailyTopic: Date, description: string, name: string) {
        this.idDailyTopic = idDailyTopic;
        this.dateDailyTopic = dateDailyTopic;
        this.description = description;
        this.name = name;
    }

    public getIdDailyTopic(): string { return this.idDailyTopic; }
    public getDateDailyTopic(): Date { return this.dateDailyTopic; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }

    public setIdDailyTopic(value: string): void { this.idDailyTopic = value; }
    public setDateDailyTopic(value: Date): void { this.dateDailyTopic = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
}
