import { Poll } from './poll';
import { Mark } from './mark';
import { Student } from './student';

export class Course {

    private idCourse: string;
    private description: string;
    private name: string;
    private ects: number;
    private student: Student;
    private isLearningAgreementValid: boolean;
    private teachers: string[];
    private polls: Poll[];
    private marks: Mark[];

    constructor(idCourse: string = null, name: string = null, description: string = null, ects: number = null,
        teacher: string[] = [], student: Student = null, polls: Poll[] = [], marks: Mark[] = []) {
        this.idCourse = idCourse;
        this.description = description;
        this.name = name;
        this.ects = ects;
        this.student = student;
        this.teachers = teacher;
        this.polls = polls;
        this.marks = marks;
        this.isLearningAgreementValid = false;

        this.student.getCourses().push(this);
    }

    public getIdCourse(): string { return this.idCourse; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getEcts(): number { return this.ects; }
    public getStudent(): Student { return this.student; }
    public getTeachers(): string[] { return this.teachers; }
    public getPolls(): Poll[] { return this.polls; }
    public getMarks(): Mark[] { return this.marks; }

    public setIdCourse(value: string): void { this.idCourse = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setEcts(value: number): void { this.ects = value; }
    public setStudent(value: Student): void { this.student = value; }
    public setTeachers(value: string[]): void { this.teachers = value; }
    public setPolls(value: Poll[]): void { this.polls = value; }
    public setMarks(value: Mark[]): void { this.marks = value; }
}
