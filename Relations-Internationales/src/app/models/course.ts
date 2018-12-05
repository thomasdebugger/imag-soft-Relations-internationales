import { Poll } from './poll';
import { Mark } from './mark';
import { Student } from './student';

export class Course {

    private idCourse: string;
    private description: string;
    private name: string;
    private ects: number;
    private idPerson: string;
    private teachers: { fullName: string, emailAddress: string }[];
    private polls: Poll[];
    private marks: Mark[];

    // constructor(idCourse: string = null, name: string = null, description: string = null, ects: number = null,
    //     teacher: { fullName: string, emailAddress: string }[] = [], student: Student = null, polls: Poll[] = [],
    //     marks: Mark[] = []) {
    //     this.idCourse = idCourse;
    //     this.description = description;
    //     this.name = name;
    //     this.ects = ects;
    //     this.student = student;
    //     this.teachers = teacher;
    //     this.polls = polls;
    //     this.marks = marks;

    //     this.student.getCourses().push(this);
    // }

    constructor(data?: object) {
        const course = data || {};
        this.idCourse = course['idCourse'];
        this.description = course['description'];
        this.name = course['name'];
        this.ects = parseInt(course['ects'], 10);
        this.idPerson = course['idPerson'];
        this.teachers = course['teachers'] || [];
        this.polls = (course['polls'] || []).map(poll => new Poll(poll));
        this.marks = (course['marks'] || []).map(mark => new Mark(mark));
    }

    public getIdCourse(): string { return this.idCourse; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getEcts(): number { return this.ects; }
    public getIdPerson(): string { return this.idPerson; }
    public getTeachers(): { fullName: string, emailAddress: string }[] { return this.teachers; }
    public getPolls(): Poll[] { return this.polls; }
    public getMarks(): Mark[] { return this.marks; }

    public setIdCourse(value: string): void { this.idCourse = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setEcts(value: number): void { this.ects = value; }
    public setIdPerson(value: string): void { this.idPerson = value; }
    public setTeachers(value: { fullName: string, emailAddress: string }[]): void { this.teachers = value; }
    public setPolls(value: Poll[]): void { this.polls = value; }
    public setMarks(value: Mark[]): void { this.marks = value; }
}
