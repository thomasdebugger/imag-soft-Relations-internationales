import { Poll } from './poll';

export class PossibleAnswer {

    private idPossibleAnswer: string;
    private idPoll: string;
    private value: string;

    // constructor(idPossibleAnswer: string, poll: Poll, value: string) {
    //     this.idPossibleAnswer = idPossibleAnswer;
    //     this.poll = poll;
    //     this.value = value;

    //     this.poll.getPossiblesAnswers().push(this);
    // }

    constructor(data: object) {
        const possibleAnswer = data || {};
        this.idPossibleAnswer = possibleAnswer['idPossibleAnswer'];
        this.idPoll = possibleAnswer['idPoll'];
        this.value = possibleAnswer['value'];
    }

    public getIdPossibleAnswer(): string { return this.idPossibleAnswer; }
    public getIdPoll(): string { return this.idPoll; }
    public getValue(): string { return this.value; }

    public setIdPossibleAnswer(value: string): void { this.idPossibleAnswer = value; }
    public setIdPoll(value: string): void { this.idPoll = value; }
    public setValue(value: string): void { this.value = value; }
}
