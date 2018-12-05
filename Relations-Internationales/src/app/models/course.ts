
export class Course {

    private idCourse: string;
    private description: string;
    private name: string;
    private ects: number;
    private idPerson: string;
    private teacherFullName: string;
    private teacherEmail: string;

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
        this.teacherFullName = course['teacherFullName'];
        this.teacherEmail = course['teacherEmail'];
    }

    public getIdCourse(): string { return this.idCourse; }
    public getDescription(): string { return this.description; }
    public getName(): string { return this.name; }
    public getEcts(): number { return this.ects; }
    public getIdPerson(): string { return this.idPerson; }
    public getTeacherFullName(): string { return this.teacherFullName; }
    public getTeacherEmail(): string { return this.teacherEmail; }

    public setIdCourse(value: string): void { this.idCourse = value; }
    public setDescription(value: string): void { this.description = value; }
    public setName(value: string): void { this.name = value; }
    public setEcts(value: number): void { this.ects = value; }
    public setIdPerson(value: string): void { this.idPerson = value; }
    public setTeacherFullName(value: string): void { this.teacherFullName = value; }
    public setTeacherEmail(value: string): void { this.teacherEmail = value; }
}
