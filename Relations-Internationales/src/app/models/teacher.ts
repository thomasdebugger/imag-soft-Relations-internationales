import { Course } from './course';

export class Teacher {

    private idTeacher: string;
    private course: Course;
    private lastName: string;
    private firstName: string;

    constructor(idTeacher: string, course: Course, lastName: string, firstName: string) {
        this.idTeacher = idTeacher;
        this.course = course;
        this.lastName = lastName;
        this.firstName = firstName;

        this.course.getTeachers().push(this);
    }

    public getIdTeacher(): string { return this.idTeacher; }
    public getCourse(): Course { return this.course; }
    public getFirstName(): string { return this.firstName; }
    public getLastName(): string { return this.lastName; }

    public setIdTeacher(value: string): void { this.idTeacher = value; }
    public setCourse(value: Course): void { this.course = value; }
    public setFirstName(value: string): void { this.firstName = value; }
    public setLastName(value: string): void { this.lastName = value; }
}
