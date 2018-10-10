import { Course } from './course';

export class Mark {

    private idMark: string;
    private course: Course;
    private typeMark: string;
    private value: number;

    constructor(idMark: string, course: Course, typeMark: string, value: number) {
        this.idMark = idMark;
        this.course = course;
        this.typeMark = typeMark;
        this.value = value;

        this.course.getMarks().push(this);
    }

    public getIdMark(): string { return this.idMark; }
    public getCourse(): Course { return this.course; }
    public getTypeMark(): string { return this.typeMark; }
    public getValue(): number { return this.value; }

    public setIdMark(value: string): void { this.idMark = value; }
    public setCourse(value: Course): void { this.course = value; }
    public setTypeMark(value: string): void { this.typeMark = value; }
    public setValue(value: number): void { this.value = value; }
}
