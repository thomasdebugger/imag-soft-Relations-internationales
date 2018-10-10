import { Teacher } from './teacher';
import { Poll } from './poll';
import { Mark } from './mark';

export class Course {

    private idCourse: string;
    private description: string;
    private name: string;
    private ects: number;
    private teachers: Teacher[];
    private polls: Poll[];
    private marks: Mark[];

    constructor(idCourse: string, description: string, name: string, ects: number, teacher: Teacher[],
        polls: Poll[], marks: Mark[]) {
        this.idCourse = idCourse;
        this.description = description;
        this.name = name;
        this.ects = ects;
        this.teachers = teacher;
        this.polls = polls;
        this.marks = marks;
    }

    public getIdCourse(): string { return this.idCourse; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getEcts(): number { return this.ects; }
    public getTeachers(): Teacher[] { return this.teachers; }
    public getPolls(): Poll[] { return this.polls; }
    public getMarks(): Mark[] { return this.marks; }

    public setIdCourse(value: string): void { this.idCourse = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setEcts(value: number): void { this.ects = value; }
    public setTeachers(value: Teacher[]): void { this.teachers = value; }
    public setPolls(value: Poll[]): void { this.polls = value; }
    public setMarks(value: Mark[]): void { this.marks = value; }
}
