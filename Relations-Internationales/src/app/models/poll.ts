import { Course } from './course';
import { PossibleAnswer } from './possible-answer';

export class Poll {

    private idPoll: string;
    private idCourse: string;
    private status: string;
    private question: string;
    private answer: string;
    private dateAnswer: Date;

    // constructor(idPoll: string, course: Course, status: string, question: string, answer: string,
    //     dateAnswer: Date, possiblesAnswers: PossibleAnswer[]) {
    //     this.idPoll = idPoll;
    //     this.course = course;
    //     this.status = status;
    //     this.question = question;
    //     this.answer = answer;
    //     this.dateAnswer = dateAnswer;
    //     this.possiblesAnswers = possiblesAnswers;

    //     this.course.getPolls().push(this);
    // }

    constructor(data: object) {
        const poll = data || {};
        this.idPoll = poll['idPoll'];
        this.idCourse = poll['idCourse'];
        this.status = poll['status'];
        this.question = poll['question'];
        this.answer = poll['answer'];
        this.dateAnswer = poll['dateAnswer'];
    }

    public getIdPoll(): string { return this.idPoll; }
    public getIdCourse(): string { return this.idCourse; }
    public getStatus(): string { return this.status; }
    public getQuestion(): string { return this.question; }
    public getAnswer(): string { return this.answer; }
    public getDateAnswer(): Date { return this.dateAnswer; }

    public setIdPoll(value: string): void { this.idPoll = value; }
    public setIdCourse(value: string): void { this.idCourse = value; }
    public setStatus(value: string): void { this.status = value; }
    public setQuestion(value: string): void { this.question = value; }
    public setAnswer(value: string): void { this.answer = value; }
    public setDateAnswer(value: Date): void { this.dateAnswer = value; }
}
