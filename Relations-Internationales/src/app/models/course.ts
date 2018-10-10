export class Course {

    private idCourse: string;
    private description: string;
    private name: string;
    private ects: number;

    constructor(idCourse: string, description: string, name: string, ects: number) {
        this.idCourse = idCourse;
        this.description = description;
        this.name = name;
        this.ects = ects;
    }

    public getIdCourse(): string { return this.idCourse; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getEcts(): number { return this.ects; }

    public setIdCourse(value: string): void { this.idCourse = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setEcts(value: number): void { this.ects = value; }
}
