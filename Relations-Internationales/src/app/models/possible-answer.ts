import { Poll } from './poll';

export class PossibleAnswer {

    private idPossibleAnswer: string;
    private poll: Poll;
    private value: string;

    constructor(idPossibleAnswer: string, poll: Poll, value: string) {
        this.idPossibleAnswer = idPossibleAnswer;
        this.poll = poll;
        this.value = value;

        this.poll.getPossiblesAnswers().push(this);
    }

    public getIdPossibleAnswer(): string { return this.idPossibleAnswer; }
    public getPoll(): Poll { return this.poll; }
    public getValue(): string { return this.value; }

    public setIdPossibleAnswer(value: string): void { this.idPossibleAnswer = value; }
    public setPoll(value: Poll): void { this.poll = value; }
    public setValue(value: string): void { this.value = value; }
}
